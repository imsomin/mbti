import React from 'react';
import styled from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { QuestionData } from '../assets/data/quesionData';
//라이브러리를 사용하는 임포트구문이 컴포넌트를 부르는 임포트구문보다 위에 있어야 함


//Home 컴포넌트
const Question = () => {

    const [questionNo, setQuestionNo] = React.useState(0);

    const [totalScore, setTotalScore] = React.useState([
        { id: "EI", score: 0},
        { id: "SN", score: 0},
        { id: "TF", score: 0},
        { id: "JP", score: 0}
    ])

    const navigate = useNavigate();




    //console.log("questionNo", questionNo);
    //버튼을 누를 때마다 인덱스가 하나씩 증가하면서 보여주도록 하기 위해 questionNo로 설정해준다

    //console.log("totalScore", totalScore);

    //새로운 객체를 만들어 각각의 객체를 totalScore 배열 안에 인덱스를 찾아 해당 객체를 대신하는 방법으로 로직 구성

    const handleClickButton = (no, type) => {

        const newScore = totalScore.map((s) => 
            s.id === type ? {id: s.id, score: s.score + no} : s 
        );

        setTotalScore(newScore);


        

        //12번까지 문제가 끝나게 되면 다음 문제로 넘어가지 않도록 예외 처리를 해준다
        //문제 전체의 개수(12)와 해당 문제 더하기 1이 같지 않다면
        if(QuestionData.length !== questionNo + 1){
            
            setQuestionNo(questionNo + 1); //다음 문제로 넘어갈 수 있게 하는 부분
        
        } else{
            //결과 페이지로 이동하지 전에,
            //mbti를 도출하기 위한 로직 작성하기(newScore 활용)
            const mbti = newScore.reduce(
                (acc, curr) =>
                acc + (curr.score >= 2 ? curr.id.substring(0,1) : curr.id.substring(1,2)),
                ""
            );

            //console.log("mbti", mbti);
            //결과값 바탕으로 mbti 나옴

            //주어진 mbti를 바탕으로
            //결과 페이지 이동
            //navigate("/result");
            //result 페이지의 경우 새로운 컴포넌트이기 때문에 
            //navigate에서 mbti 결과와 함께 result 주소를 넘겨주도록 한다
            navigate({
                pathname: "/result",
                search: `?${createSearchParams({
                    mbti: mbti,
                })}`
            });
        }
   
    }

    //console.log("QuestionData", QuestionData);

    // //오른쪽 B버튼
    // const handleClickButtonB = (no, type) => {

    //     if( type === "EI" ){

    //     //기존 스코어에 더할 값을 계산(기존의 값 + 배점)
    //     const addScore = totalScore[0].score + no;
    //     //새로운 객체
    //     const newObject = { id: "EI", score: addScore};
    //     //splice JS함수 통해 새로운 객체를 해당 객체 자리에 넣어줌(0번째 인덱스의 1번째 요소를 newObject로 변경)
    //     totalScore.splice(0, 1, newObject);
    
    //     }else if (type === "SN") {
    
    //     const addScore = totalScore[1].score + no;
    //     const newObject = { id: "SN", score: addScore};
    //     totalScore.splice(1, 1, newObject);
    
    //     }else if (type === "TF") {
    
    //     const addScore = totalScore[2].score + no;
    //     const newObject = { id: "TF", score: addScore};
    //     totalScore.splice(2, 1, newObject);
    
    //     }else {
    
    //     const addScore = totalScore[3].score + no;
    //     const newObject = { id: "JP", score: addScore};
    //     totalScore.splice(3, 1, newObject);
    
    //      }

    //     setQuestionNo(questionNo + 1);
    // }


    return (
    <Wrapper>
         <ProgressBar striped variant="danger" now={(questionNo / QuestionData.length)*100 } style={{marginTop: '20px'}}/>
         <Title>{QuestionData[questionNo].title}</Title>
         <ButtonGroup>
         <Button onClick={()=>handleClickButton(1, QuestionData[questionNo].type)} style={{width:"40%", minHeight:"200px", fontSize:"15px"}}>{QuestionData[questionNo].answera}</Button>
         <Button onClick={()=>handleClickButton(0, QuestionData[questionNo].type)} style={{width:"40%", minHeight:"200px", fontSize:"15px", marginLeft:"20px"}}>{QuestionData[questionNo].answerb}</Button>
         </ButtonGroup>
    </Wrapper>
    )
}

//다른곳에서 import 할 수 있도록 하는 과정
export default Question;


const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
`

const Title = styled.div`
    font-size: 30pt;
    text-align: center;
    font-family: "RixInooAriDuri";
`


const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: "RixInooAriDuri";
`