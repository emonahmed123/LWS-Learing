export default function taskReducer(tasks, action) {

    switch (action.type) {
        case "added": {
            return [

                ...tasks,
                {
                    id: action.id,

                    text: action.text,
                    done: false,
                },

            ]
        }
        case "changed": {
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task
                }
                else {
                    return t
                }
            })
        }
        case "deleted": {
            return tasks.filter((t) => t.id !== action.id);
        }

        default: {
            throw Error(`No action mathched with ${action.type}`);
        }
    }
}


// if (action.type === 'added') {
//     return [
//         [
//             ...tasks,
//             {
//                 id: action.id,

//                 text: action.text,
//                 done: false,
//             },
//         ]
//     ]

// } else if (action.type === "changed") {

//     return tasks.map((t) => {
//         if (t.id === action.task.id) {
//             return action.task
//         }
//         else {
//             return t
//         }
//     })

// } else if (action.type === "deleted") {
//     tasks.filter((t) => t.id !== action.id)
// } else {

// }

