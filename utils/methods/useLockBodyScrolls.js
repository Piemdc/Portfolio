
import { useEffect } from 'react';

const useLockBodyScroll = (isLocked) => {
    useEffect(() => {
        if (isLocked) {
            // Empêche le défilement du body
            document.body.style.overflow = 'hidden';
        } else {
            // Autorise le défilement du body
            document.body.style.overflow = 'visible';
        }

        // Réinitialise l'état à la désactivation du composant
        return () => {
            document.body.style.overflow = 'visible';
        }
    }, [isLocked]); // Met à jour l'effet si l'état isLocked change
};

export default useLockBodyScroll;