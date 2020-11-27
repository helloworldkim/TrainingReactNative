/* eslint-disable prettier/prettier */
//reducer
//state값, action 2가지 인자를 가진다


const initialState = {
    counter: [
        {
            counterNum: 0,
        },
    ],
};

const counter = (state = initialState, action) => {
    const { counter } = state;

    switch (action.type) { //순수함수
        case 'INCREMENT':
            return ({
                counter: [
                    ...counter.slice(0, action.index),
                    { counterNum: counter[action.index].counterNum + 1 },
                    ...counter.slice(action.index + 1, counter.length),
                ],
            }); //실제 로직처리되는부분

        case 'DECREMENT':
            return ({
                counter: [
                    ...counter.slice(0, action.index),
                    { counterNum: counter[action.index].counterNum - 1 },
                    ...counter.slice(action.index + 1, counter.length),
                ],
            });

        case 'ADD':
            return ({
                counter: [
                    ...counter, { counterNum: 0 },
                ],
            });//카운터 추가

        case 'REMOVE':
            return ({
                counter: counter.slice(0, counter.length - 1),
            });//삭제

        default:
            return state;

    }
};

export default counter;
