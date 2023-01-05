import React from 'react';

//css-in-js
import styled from 'styled-components';
//이를 통해 컴포넌트를 통해 스타일 적용이 가능해짐

import Button from 'react-bootstrap/Button';

import { ResultData } from '../assets/data/resultData';

import { useNavigate, useSearchParams } from 'react-router-dom';

// import { ButtonGroup } from 'react-bootstrap';




//Home 컴포넌트
const Result = () => {

    const navigate = useNavigate();
    //테스트 다시하기로 메인화면 가기

    
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');

    //최종적으로 도출한 결과 객체
    //resultData라고 썼으므로 return 부분에서도 대소문자 똑같이 적용 주의
    const [resultData, setResultData] = React.useState({});

    React.useEffect( () => {
        const result = ResultData.find((s) => s.best === mbti);
        setResultData(result);
    }, [mbti] )


    //console.log(mbti);
    //console.log(resultData);

    return (
        <Container>
        <Wrapper>
            <Header>나의 단짝 반려견을 알아보자❣</Header>
            <Contents>
            <Title>결과 보기</Title>
            <LogoImage>
                <img alt="myDog" src={resultData.image} className="rounded-5" width={350} height={350}/>
            </LogoImage>
            <Desc>예비 견주님과 찰떡궁합 멍뭉이는 '{resultData.name}' 입니다.</Desc>
            <Desc style={{marginTop: 10,}}> 🎊{resultData.desc}🎈 </Desc>
            <ButtonGroup>
                <Button style={{fontFamily:  "RixInooAriDuri"}} onClick={()=>navigate("/")}
                >테스트 다시하기</Button>
                <Button style={{fontFamily:  "RixInooAriDuri", marginLeft: "20px"}} onClick={()=>navigate("/")}
                >카카오톡 공유하기</Button>
             </ButtonGroup>
            </Contents>
        </Wrapper>
        </Container>
        )
}

//다른곳에서 import 할 수 있도록 하는 과정
export default Result;


const Container = styled.div`
    display: flex;
    height: 120vh;
    width: 100%;
    background: #e6e6fa;
    flex-direction: column;
`


const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const Header = styled.div`
    color: #191970;
    font-size: 40pt;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "RixInooAriDuri";
    background: #fff0f5;
    height: 15vh;
    width: 100%
`

const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 30pt;
    margin-top: 40px;
    font-family: "RixInooAriDuri";
    font-weight: 550;
`

const LogoImage = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    width: 200;
    height: 200;

`

const Desc = styled.div`
    font-size: 18pt;
    text-align: center;
    font-family: "RixInooAriDuri";
    margin-top: 30px;
    margin-bottom: 30px;
    width: 200;
`

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
`