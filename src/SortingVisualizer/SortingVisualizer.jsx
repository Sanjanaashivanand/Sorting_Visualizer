import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSort.js'
import { BubbleSort} from '../SortingAlgorithms/BubbleSort';
import {Container,Row,Col,Button} from 'react-bootstrap';

const PRIMARY_COLOR = "cyan";
const SECONDARY_COLOR = "green";


export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for(let i=0;i<10;i++){
            array.push(randomIntFromInterval(5, 75));
        }
        this.setState({array});
    }

    bubbleSort(){
        BubbleSort(this.state.array);
    }

    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        for(let i=0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isChangeColor = i % 3 !== 2;
            if(isChangeColor){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 2);
            } else {
                setTimeout(()=>{
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}vh`;
                }, i * 2);
            }

        }
    }

    render(){
        const {array} =this.state;

        return(
            <Container>
                <Row>
                    <Col>{
                        array.map((value,idx)=>(
                            <div 
                                className="array-bar" 
                                key={idx}
                                style={{height: `${value}vh`}}>
                            </div>
                        ))
                    }
                    
                    </Col>
                </Row>
                <Row className="p-3 m-2">
                    <Col>
                        <Button variant="dark" size="md" onClick = {() => this.resetArray()}>Generate a new array</Button>
                    </Col>
                    <Col>
                        <Button variant="dark" size="md" onClick={() => this.bubbleSort()}>Bubble Sort</Button>
                    </Col>
                    <Col>
                        <Button variant="dark" size="md" onClick={() => this.mergeSort()}>Merge Sort</Button>
                    </Col>
                    <Col>
                        <Button variant="dark" size="md">Quick Sort</Button>
                    </Col>
                    <Col>
                        <Button variant="dark" size="md">Selection Sort</Button>
                    </Col>
                </Row>
             </Container>
        );
    }
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max-min +1) +min);
}