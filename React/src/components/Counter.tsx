import React, {useState} from "react";
import styled from "styled-components";

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const onIncrease = () => setCount(count+1);
    const onDecrease = () => setCount(count-1);
    const onInit = () => {
        setCount(0);
    }

    const H2Style = styled.h3`
        color: white;
    `;

    return (
        <div>
            <H2Style>Count : {count}</H2Style>
            <div>
                <button onClick={onIncrease}>추가</button>
                <button onClick={onDecrease}>추가</button>
                <button onClick={onInit}>초기화</button>
            </div>
        </div>
    );
}

export default Counter;