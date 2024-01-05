 const findCurrentElementIndex = (scrollPosition) => {
    const elementHeight = window.innerHeight;
    const nbElements = document.body.offsetHeight / elementHeight;
    const index = scrollPosition / elementHeight;

    // obtenir le pourcentage de défilement de l'élément actuel
    const percent = (index % 1) * 100;

    return {index: Math.floor(index), percent};
};

export default findCurrentElementIndex