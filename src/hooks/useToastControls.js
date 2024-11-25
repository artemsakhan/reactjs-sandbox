import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { createStore, useStore } from "zustand";
import { shallow } from "zustand/shallow";
import cn from "clsx";
import { AnimatePresence, motion } from "framer-motion";

const toastStore = createStore((set) => ({
    toastList: new Set(),
    show(toastId) {
        set((state) => {
            const newToastList = new Set(state.toastList);
            newToastList.add(toastId);
            return { toastList: newToastList };
        });
    },
    close(toastId) {
        set((state) => {
            const newToastList = new Set(state.toastList);
            newToastList.delete(toastId);
            return { toastList: newToastList };
        });
    },
    closeAll() {
        set(() => ({ toastList: new Set() }));
    },
}));

export function Toast({ uniqueId, config = {}, className, children }) {
    const { duration = 3500, role = "status" } = config;

    const toastList = useStore(toastStore, (state) => state.toastList, shallow);
    const close = useStore(toastStore, (state) => state.close);

    const isShown = toastList.has(uniqueId);

    useEffect(() => {
        if (!duration || !isShown) {
            return;
        }

        const timeoutId = setTimeout(() => {
            close(uniqueId);
        }, duration);

        return () => clearTimeout(timeoutId);
    }, [uniqueId, isShown, duration, close]);

    return createPortal(
        <AnimatePresence>
            {isShown && (
                <motion.div
                    key={uniqueId}
                    layout
                    initial={{ opacity: 0,}}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn("toast", className)}
                    role={role}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>,
        document.querySelector("#toasts-portal")
    );
}

export function useToastControls() {
    const show = useStore(toastStore, (state) => state.show);
    const close = useStore(toastStore, (state) => state.close);
    const closeAll = useStore(toastStore, (state) => state.closeAll);

    return { show, close, closeAll };
}
