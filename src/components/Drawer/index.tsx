import {PropsWithChildren, useEffect} from "react";
import {createPortal} from "react-dom";

interface DrawerProps {
  onClose: () => void;
}

export const Drawer = ({onClose, children}: PropsWithChildren<DrawerProps>) => {
  const portalRoot = document.getElementById('portal-root') || document.body;
  const el = document.createElement('div');

  useEffect(() => {
    portalRoot.appendChild(el);

    document.body.style.overflow = "hidden";

    return () => {
      portalRoot.removeChild(el);

      document.body.style.overflow = "visible";
    };
  }, [el, portalRoot]);

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div className="bg-white dark:bg-slate-900 p-4 max-w-md absolute right-0 top-0 bottom-0" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600" onContextMenu={(e) => e.preventDefault()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    el
  );
};