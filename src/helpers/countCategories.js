const countTasks = (dataset) => {
    return dataset.reduce((count, note) => {
        return (note.category === "Task") ? ++count : count;
    }, 0);
}
const countIdeas = (dataset) => {
    return dataset.reduce((count, note) => {
        return (note.category === "Idea") ? ++count : count;
    }, 0);
}
const countRandomThoughts = (dataset) => {
    return dataset.reduce((count, note) => {
        return (note.category === "Random Thought") ? ++count : count;
    }, 0);
}

export {countTasks, countIdeas, countRandomThoughts};