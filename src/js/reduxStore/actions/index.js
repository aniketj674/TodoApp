import actionsType from './actionsType';

const updateTasks = value => ({
    type: actionsType.SET_TASKS,
    value,
});

export {
    updateTasks,
};
