import Beagle from '../image/beagle.jpg';
import Chihuahua from '../image/chihuahua.jpg';
import Dachshund from '../image/dachshund.jpg';
import GoldenRetriever from '../image/goldenretriever.jpg';
import Jindo from '../image/jindo.jpg';
import Maltese from '../image/maltese.jpg';
import Pomeranian from '../image/pomeranian.jpg';
import Poodle from '../image/poodle.jpg';
import Terrier from '../image/terrier.jpg';
import Shihtzu from '../image/shihtzu.jpg';
import WelshCorgi from '../image/corgi.jpg';
import Yorkshire from '../image/yorkshire.jpg';
import Papillon from '../image/papillon.jpg';
import Pug from '../image/pug.jpg';
import Husky from '../image/husky.jpg';
import Shiba from '../image/shiba.jpg';

export const ResultData = [
    {
      id: 1,
      name: '진돗개',
      best: 'ESTJ',
      desc: '당신은 일을 계획하고 추진시키는 것에 능한 사람이군요! 현실 중심적이며 실용적인 면이 강한 당신은 자기관리가 철저하며 근면성실한 능력가입니다.',
      image: `${Jindo}`
    },
    {
      id: 2,
      name: '비글',
      best: 'ESFP',
      desc: '당신은 사교적이고 낙천적인 사람이군요! 활동적이고 친절한 자유로운 영혼의 소유자입니다. 어느 모임에서나 밝고 재미있는 분위기를 조성해냅니다.',
      image: `${Beagle}`
    },
    {
      id: 3,
      name: '웰시코기',
      best: 'ENTJ',
      desc: '당신은 분석적이고 객관적이며 질서를 즐기는 사람이군요! 목표 아래 사람들을 끌어모으는 힘을 가지고 있습니다. 넘치는 야망으로 생산적인 삶을 살고자 합니다.',
      image: `${WelshCorgi}`
    },
    {
      id: 4,
      name: '닥스훈트',
      best: 'INTP',
      desc: '당신은 지적 호기심이 높으며 집중력이 뛰어난 사람이군요! 진솔하면서 뚜렷한 주관을 지니고 있습니다. 타인의 비판에 대해 개방적이며 스스로에 대해 엄격한 타입입니다.',
      image: `${Dachshund}`
    },
    {
      id: 5,
      name: '푸들',
      best: 'INTJ',
      desc: '당신은 항상 더 좋은 방법을 찾기를 추구하는 전략적인 사람이군요! 당신은 창의력과 동시에 뛰어난 논리력을 지니고 있습니다. 의지와 재능으로 어려움을 이겨내는 모습을 지니고 있습니다.',
      image: `${Poodle}`
    },
    {
      id: 6,
      name: '시베리안 허스키',
      best: 'ISTJ',
      desc: '당신은 강한 인내력을 지닌 사람이군요! 조직적이고 침착한 특성을 지닌 당신은 책임감이 뛰어나고 원칙적인 면을 지니고 있습니다.',
      image: `${Husky}`
    },
    {
      id: 7,
      name: '시바견',
      best: 'ESTP',
      desc: '당신은 관대하고 유머러스한 사람이군요! 예술적으로 탁월하면서 현실 감각이 뛰어나 문제 해결을 잘 합니다. 체험을 통해 직접 경험하는 걸 선호하는 현재를 즐기는 타입입니다.',
      image: `${Shiba}`
    },
    {
      id: 8,
      name: '포메라니안',
      best: 'INFP',
      desc: '당신은 차분하고 창의적인 사람이군요! 혼자 있기를 선호하며 사려깊다는 장점이 있습니다. 뛰어난 이해력과 세심함으로 타인의 감정에 민감합니다.',
      image: `${Pomeranian}`
    },
    {
      id: 9,
      name: '치와와',
      best: 'ISFP',
      desc: '당신은 다정하고 화합을 중시하는 사람이군요! 개인주의적 성향이 강하며 규칙에 얽매이는 것을 선호하지 않습니다. 뛰어난 공감능력을 지니고 여유를 추구하는 타입입니다.',
      image: `${Chihuahua}`
    },
    {
      id: 10,
      name: '시츄',
      best: 'ISFJ',
      desc: '당신은 조용하고 차분하며 따뜻한 사람이군요! 가장 믿음직스러우며 애정이 가득한 타입입니다. 당신은 업무에 있어 꼼꼼하며 계획적으로 수행해냅니다.',
      image: `${Shihtzu}`
    },
    {
      id: 11,
      name: '퍼그',
      best: 'ENFP',
      desc: '당신은 활기가 넘치고 풍부한 상상력을 지닌 사람이군요! 반복되는 일보다는 창의력이 요구되는 일에 열정을 지니고 있습니다. 새로운 시도를 계속하며 인생을 즐겁게 살고자합니다.',
      image: `${Pug}`
    },
    {
      id: 12,
      name: '요크셔테리어',
      best: 'INFJ',
      desc: '당신은 뛰어난 통찰력과 직관력을 지니고 있는 사람이군요! 확고한 신념과 열정으로 자신의 영감을 실현시켜 나갑니다. 동시에 미래를 예측하는 것을 즐깁니다.',
      image: `${Yorkshire}`
    },
    {
      id: 13,
      name: '골든리트리버',
      best: 'ESFJ',
      desc: '당신은 타인에게 관심이 많으며 나눔을 중시하는 사람이군요! 타고난 협력자로 사회에 잘 적응하며 참을성이 많고 배려심도 넘칩니다.',
      image: `${GoldenRetriever}`
    },
    {
      id: 14,
      name: '말티즈',
      best: 'ENTP',
      desc: '당신은 논리적인 시각으로 문제의 본질을 파악해내는 사람이군요! 순발력이 뛰어나고 강한 모험심과 재치를 지니고 있습니다. 항상 당당한 모습이 멋있습니다.',
      image: `${Maltese}`
    },
    {
      id: 15,
      name: '파피용',
      best: 'ISTP',
      desc: '당신은 주변 상황을 잘 파악해내는 합리적인 사람이군요! 과묵하면서도 필요에 따라 사교적이게 됩니다. 뛰어난 관찰력을 지니고 있으며 조직하는 것에 재능이 있습니다.',
      image: `${Papillon}`
    },
    {
      id: 16,
      name: '불테리어',
      best: 'ENFJ',
      desc: '당신은 온화하고 적극적이면서 책임감이 강한 사람이군요! 인간관계에서 진실성과 온전함에 높은 가치를 두는 당신은 인류애가 많고 뛰어난 리더십을 지니고 있습니다.',
      image: `${Terrier}`
    },
  
  ]