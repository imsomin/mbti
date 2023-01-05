import React from 'react';

//css-in-js
import styled from 'styled-components';
//이를 통해 컴포넌트를 통해 스타일 적용이 가능해짐

import dogImage from '../assets/image/dogMain.PNG';

import Button from 'react-bootstrap/Button';

import { useNavigate } from 'react-router-dom';

//Home 컴포넌트
const Home = () => {

    const navigate = useNavigate();


    const handleClikcButton = () => {
        //useHistory -- 과거 사용
        navigate('/quesiton');
    }

    return (
    <Container>
    <Wrapper>
        <Header>나의 단짝 반려견을 알아보자❣</Header>
        <Contents>
        <Title>나에게 맞는 귀요미 멍뭉이🐶는?</Title>
        <LogoImage>
            <img alt="mainDog" src={dogImage} className="rounded-circle" width={350} height={350}></img>
        </LogoImage>
        <Desc>😋MBTI를 기반으로 하는 나랑 잘맞는 강아지 찾기😁</Desc>
        <Button style={{fontFamily:  "RixInooAriDuri"}} onClick={handleClikcButton}>테스트 시작하기</Button>
        </Contents>
    </Wrapper>
    </Container>
    )
}

//다른곳에서 import 할 수 있도록 하는 과정
export default Home;

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
    font-size: 40pt;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "RixInooAriDuri";
    color: #191970;
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
`

const LogoImage = styled.div`
    margin-top: 10px;

`

const Desc = styled.div`
    font-size: 20pt;
    margin-top: 30px;
    margin-bottom: 30px;
    font-family: "RixInooAriDuri";
`