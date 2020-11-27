/* eslint-disable prettier/prettier */
import { observable } from 'mobx';

class CounterStore {

    @observable counter = [{ counterNum: 0 }];

    //카운터 추가버튼
    handleAddCounter = () => {
        this.counter.push({ counterNum: 0 });
    }
    //카운터 삭제버튼
    handleRemoveCounter = () => {
        this.counter.pop();
    }

    handleIncrement = (index) => {
    }
    handleDecrement = (index) => {
    }
}
// decorate(CounterStore, {
//     counter: observable,
//     handleAddCounter: action,
//     handleRemoveCounter: action,
// });

export default new CounterStore();
