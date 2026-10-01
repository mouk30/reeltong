export interface GameProfile {
  id: string;
  number: string;
  nameKo: string;
  nameEn: string;
  tagline: string;
  reels: string;
  paylines: string;
  tempo: '느긋함 (Relaxed)' | '스피디 (Rapid)' | '스토리형 (Narrative)' | '다이내믹 (Dynamic)';
  themeColor: string;
  themeGradient: string;
  accentHex: string;
  image: string;
  summary: string;
  characteristics: string[];
  versions: { version: string; desc: string }[];
  bonusTrigger: string;
  recommendedFor: string;
}

export const GAMES_ARCHIVE: GameProfile[] = [
  {
    id: 'sea-story',
    number: '01',
    nameKo: '바다이야기',
    nameEn: 'Sea Story',
    tagline: '20년 역사의 심해 미학, 대한민국 릴게임의 원점이자 표준',
    reels: '3릴 / 5릴 (버전별 상이)',
    paylines: '단일 라인 ~ 멀티 15 페이라인',
    tempo: '느긋함 (Relaxed)',
    themeColor: 'from-blue-950 via-slate-900 to-[#07090E]',
    themeGradient: 'radial-gradient(ellipse at top, rgba(30, 58, 138, 0.35), transparent 70%)',
    accentHex: '#38bdf8',
    image: '/src/assets/images/game_sea_story_1790810370437.jpg',
    summary: '짙은 남청색 심해 배경과 여유로운 해양 생물 유영 애니메이션으로 심리적 안정감을 제공하는 대표 타이틀. 릴게임 입문자가 릴의 회전 주기와 심볼 배치 구조를 직관적으로 익히기에 최적화되어 있습니다.',
    characteristics: [
      '잔잔한 해저 사운드트랙과 고래·황금물고기 등 시인성 높은 심볼 설계',
      '버전 2, 3, 5에 따른 릴 회전 수 및 멀티 페이라인의 진화적 단계 제공',
      '단순한 베팅 흐름으로 피로도 없는 장시간 분석 플레이 가능'
    ],
    versions: [
      { version: '바다이야기 2 (Classic)', desc: '기본 3릴에 충실한 오리지널 클래식. 직관적인 단일 페이라인과 상어·거북이 심볼 체계.' },
      { version: '바다이야기 3 (Gold Edition)', desc: '황금물고기 보너스 심볼이 추가되어 보너스 모드 진입 연출이 강화된 세대.' },
      { version: '바다이야기 5 (Multi-Line)', desc: '5개 릴 및 멀티 페이라인 알고리즘 적용. 대각선 및 지그재그 조합 경우의 수 확장.' }
    ],
    bonusTrigger: '황금 고래 또는 상어 3연속 심볼 정렬 시 해저 동굴 보너스 모드 진입',
    recommendedFor: '릴게임 입문자 및 느긋하고 편안한 연출을 선호하는 분석형 플레이어'
  },
  {
    id: 'ocean-paradise',
    number: '02',
    nameKo: '오션파라다이스',
    nameEn: 'Ocean Paradise',
    tagline: '에메랄드빛 열대 산호초와 트로피컬 럭셔리의 화려한 재해석',
    reels: '5릴 3열',
    paylines: '20 페이라인',
    tempo: '다이내믹 (Dynamic)',
    themeColor: 'from-cyan-950 via-slate-900 to-[#07090E]',
    themeGradient: 'radial-gradient(ellipse at top, rgba(6, 182, 212, 0.3), transparent 70%)',
    accentHex: '#22d3ee',
    image: '/src/assets/images/game_ocean_paradise_1790810380306.jpg',
    summary: '바다이야기의 심해 무드와 달리 환상적인 산호초와 에메랄드 석양을 테마로 한 럭셔리 라인업. 밝고 경쾌한 릴 사운드와 화려한 트로피컬 컷씬이 특징입니다.',
    characteristics: [
      '태양광 굴절 광원 효과와 펄 에메랄드 그래픽 팔레트 적용',
      '스프레드 와일드(Spread Wild) 심볼을 통한 연속 라인 연결 기회',
      '모바일 터치 환경에 최적화된 유려한 반응형 인터페이스'
    ],
    versions: [
      { version: '오션파라다이스 시즌 1', desc: '산호초 탐험 모드 중심, 와일드 돌고래 심볼의 2배율 승수 시스템.' },
      { version: '오션파라다이스 리마스터', desc: 'HTML5 60fps 무설치 브라우저 최적화 엔진 탑재, 20 페이라인 완벽 구현.' }
    ],
    bonusTrigger: '조개 속 흑진주 스캐터 심볼 3개 이상 동시 착지 시 프리 스핀 10회 트리거',
    recommendedFor: '화사하고 고급스러운 시각 효과와 다채로운 페이라인 조합을 즐기는 이용자'
  },
  {
    id: 'son-goku',
    number: '03',
    nameKo: '손오공',
    nameEn: 'Son Goku (Monkey King)',
    tagline: '서유기 대서사시의 인물 조합이 만들어내는 서사적 컷씬 연출',
    reels: '5릴 3열',
    paylines: '9 ~ 25 페이라인',
    tempo: '스토리형 (Narrative)',
    themeColor: 'from-red-950 via-amber-950 to-[#07090E]',
    themeGradient: 'radial-gradient(ellipse at top, rgba(239, 68, 68, 0.3), transparent 70%)',
    accentHex: '#f87171',
    image: '/src/assets/images/game_songoku_myth_1790810391610.jpg',
    summary: '손오공, 저팔계, 사오정, 삼장법사 등 서유기 속 고유 캐릭터들이 심볼로 등장하여 조합에 따라 각기 다른 서사적 전투와 비상 컷씬을 선보이는 엔터테인먼트 특화 릴게임입니다.',
    characteristics: [
      '캐릭터별 고유 보너스 컷씬 (여의봉 회전, 파초선 돌풍 등)',
      '단순 숫자가 아닌 등장인물 조합별 차등 승수 테이블 적용',
      '동양 판타지 금박 문양과 강렬한 타격감의 회전 정지 이펙트'
    ],
    versions: [
      { version: '손오공 오리지널', desc: '전통 아케이드 오락실의 레트로 사운드와 기본 캐릭터 콤보 체계.' },
      { version: '신 손오공 파천황', desc: '천계 대전 보너스 씬 추가 및 확장 와일드 여의봉 심볼 탑재.' }
    ],
    bonusTrigger: '근두운 스캐터 심볼 발동 시 요괴 격퇴 미니 보너스 스테이지 진입',
    recommendedFor: '스토리 컷씬과 캐릭터 인터랙션을 중요시하는 엔터테인먼트 중심 유저'
  },
  {
    id: 'golden-castle',
    number: '04',
    nameKo: '황금성',
    nameEn: 'Golden Castle',
    tagline: '금빛 보물 금고와 묵직한 고딕 건축이 선사하는 다크 럭셔리',
    reels: '5릴 4열 (확장형)',
    paylines: '40 페이라인',
    tempo: '다이내믹 (Dynamic)',
    themeColor: 'from-amber-950 via-yellow-950 to-[#07090E]',
    themeGradient: 'radial-gradient(ellipse at top, rgba(245, 158, 11, 0.3), transparent 70%)',
    accentHex: '#fbbf24',
    image: '/src/assets/images/hero_reel_cinematic_1790810357834.jpg',
    summary: '황금 성채와 다이아몬드, 보물 상자, 고대 황금 열쇠를 모티프로 한 중후한 릴게임. 묵직한 금속 회전음과 40개에 달하는 촘촘한 페이라인 구조로 긴장감 있는 전개를 선사합니다.',
    characteristics: [
      '골드 & 흑요석(Obsidian)의 극명한 대비가 돋보이는 고딕 아키텍처 비주얼',
      '고배당 황금성 심볼의 스택(Stack) 누적 출현 메커니즘',
      '보물 금고 개방 시 펼쳐지는 단계별 승수 배율 선택'
    ],
    versions: [
      { version: '황금성 클래식 1', desc: '단일 보물상자 보너스 및 금괴 누적 카운터 시스템.' },
      { version: '황금성 로얄 에디션', desc: '5x4 확장 매트릭스 및 40 페이라인, 황금열쇠 락 해제 보너스 게임.' }
    ],
    bonusTrigger: '황금성 열쇠 심볼 3개 잠금 해제 시 비밀 보물 금고 룰렛 발동',
    recommendedFor: '높은 페이라인 밀도와 금빛 다크 럭셔리 분위기를 선호하는 베테랑 이용자'
  },
  {
    id: 'yamato',
    number: '05',
    nameKo: '야마토',
    nameEn: 'Yamato (Space Battleship)',
    tagline: '광활한 성운을 가르는 우주 전함, 압도적 회차 회전율과 빠른 템포',
    reels: '3릴 ~ 5릴 멀티',
    paylines: '5 ~ 25 페이라인',
    tempo: '스피디 (Rapid)',
    themeColor: 'from-indigo-950 via-slate-950 to-[#07090E]',
    themeGradient: 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.3), transparent 70%)',
    accentHex: '#818cf8',
    image: '/src/assets/images/game_yamato_galaxy_1790810402133.jpg',
    summary: '우주 전함 야마토의 비장한 항해와 코스믹 성운을 배경으로 한 하이템포 릴게임. 1회차당 소요 시간이 바다이야기 대비 절반 수준으로 짧아 신속한 회차 분석을 원하는 유저에게 최적화되었습니다.',
    characteristics: [
      '스피디한 릴 가속 및 급제동 스톱 애니메이션',
      '우주 워프(Warp) 및 파동포 충전 연출의 보너스 카운트다운',
      '시리즈별(야마토 2, 3, 5)로 완벽히 분화된 릴 구성과 배당표'
    ],
    versions: [
      { version: '야마토 2 (Standard)', desc: '간결한 3릴 구조와 기본 워프 항법 모드로 입문하기 쉬운 표준 규격.' },
      { version: '야마토 3 (Fleet Combat)', desc: '적 함대 조우 시 발동하는 인터랙티브 타겟팅 보너스 시스템.' },
      { version: '야마토 5 (Cosmic Multi)', desc: '멀티라인 파동포 일제 사격 모드 및 복합 심볼 그리드 탑재.' }
    ],
    bonusTrigger: '파동포 게이지 100% 충전 또는 함교 스캐터 3개 출현 시 코스믹 배틀 보너스',
    recommendedFor: '짧은 시간 동안 빠른 회차 순환과 기계적 메카닉 비주얼을 선호하는 이용자'
  },
  {
    id: 'aladdin',
    number: '06',
    nameKo: '알라딘',
    nameEn: 'Aladdin & The Magic Lamp',
    tagline: '사막의 황금 궁전과 신비로운 마법 램프의 지니가 펼치는 이국적 환상',
    reels: '5릴 3열',
    paylines: '15 페이라인',
    tempo: '스토리형 (Narrative)',
    themeColor: 'from-amber-950 via-purple-950 to-[#07090E]',
    themeGradient: 'radial-gradient(ellipse at top, rgba(168, 85, 247, 0.25), transparent 70%)',
    accentHex: '#c084fc',
    image: '/src/assets/images/game_sea_story_1790810370437.jpg',
    summary: '아라비안나이트의 신비로운 밤하늘과 황금빛 오아시스 궁전을 무대로 한 릴게임. 마법 램프를 문지를 때 등장하는 거인 지니의 소원 연출과 양탄자 보너스가 이국적인 매력을 극대화합니다.',
    characteristics: [
      '자수정과 황금 보석, 마법 램프 등 아라비아 무드의 이국적 심볼',
      '마법 양탄자 활공 시 무작위 릴에 와일드 심볼을 투척하는 지니 기믹',
      '몽환적인 페르시아 전통 음계의 배경 선율'
    ],
    versions: [
      { version: '알라딘 클래식', desc: '3개 램프 수집 모드 및 오아시스 쉼터 배당표.' },
      { version: '알라딘 램프의 요정', desc: '5릴 15라인 확장 및 3가지 소원 선택형 보너스 피처 지원.' }
    ],
    bonusTrigger: '황금 마법 램프 3개 출현 시 지니가 3가지 보너스 소원 중 하나를 무작위 부여',
    recommendedFor: '독창적이고 신비로운 세계관과 마법 램프 테마의 서사적 연출을 원하는 플레이어'
  }
];

export interface MistakeItem {
  id: number;
  number: string;
  title: string;
  danger: string;
  solution: string;
  evidence: string;
}

export const TOP_6_MISTAKES: MistakeItem[] = [
  {
    id: 1,
    number: '01',
    title: '버전 확인 없이 무작정 시작하기',
    danger: '같은 바다이야기라도 버전 2(클래식 3릴)와 버전 5(멀티 15라인)는 릴 개수, 심볼 배치, 승수 규칙이 근본적으로 다릅니다. 버전을 모르면 자신이 베팅하는 페이라인조차 인지하지 못합니다.',
    solution: '플레이 접속 전 반드시 게임의 버전 명칭(예: 바다이야기2, 야마토3 등)과 페이라인 수를 확인하십시오.',
    evidence: '버전별로 당첨 조합 경우의 수가 최대 수백 배 차이가 납니다.'
  },
  {
    id: 2,
    number: '02',
    title: '"도박사의 오류 (Gambler\'s Fallacy)" 맹신',
    danger: '"연속 10판 불발되었으니 이제 터질 차례다"라는 생각은 수학적으로 100% 허구입니다. RNG(난수발생기)는 과거의 회차를 기억하는 메모리가 전혀 없습니다.',
    solution: '모든 회차는 이전 결과와 완전히 독립된 독립시행(Independent Trial)임을 상기하십시오.',
    evidence: '동전 10번 앞면이 나와도 11번째 앞면 확률은 여전히 50%인 것과 같습니다.'
  },
  {
    id: 3,
    number: '03',
    title: '출처 불명의 실행 파일(.exe, .apk) 설치',
    danger: '문자, SNS 링크, 카카오톡 오픈채팅방에서 배포되는 설치 파일은 악성코드, 키로거, 금융 정보 탈취의 온상입니다. 또한 운영체제 권한을 요구해 기기를 손상시킵니다.',
    solution: '별도 프로그램 다운로드 없이 크롬, 사파리 브라우저에서 즉시 구동되는 100% 무설치 웹 표준 방식만 이용하십시오.',
    evidence: '최신 웹 기반 릴게임은 브라우저 샌드박스 보안 규격을 준수하여 기기 오염 위험이 0%입니다.'
  },
  {
    id: 4,
    number: '04',
    title: '유튜브·블로그의 허위 "공략법 / 연타법" 맹종',
    danger: '"특정 초 단위 버튼 클릭", "타이밍 연타법", "확률 조작 비기" 등은 100% 사기성 광고 마케팅입니다. 이용자가 버튼을 누르는 순간 0.001초 난수로 결과는 이미 확정됩니다.',
    solution: '게임의 공학적 룰과 심볼별 배당표만 숙지하고, 허위 공략 콘텐츠는 호객용 미끼로 간주하고 무시하십시오.',
    evidence: '공인된 RNG 알고리즘은 외부 입력 시간차에 의해 패턴이 생기지 않도록 매 밀리초 시드를 갱신합니다.'
  },
  {
    id: 5,
    number: '05',
    title: '초보자가 처음부터 복잡한 멀티라인 게임 선택',
    danger: '야마토 5나 멀티라인 알라딘처럼 릴 5개와 40개 페이라인이 얽힌 게임은 한 판이 어떤 조합으로 승패가 났는지 초보자가 파악하기 전에 끝나 혼란과 과소비를 유발합니다.',
    solution: '느린 템포와 명확한 3릴 구조를 갖춘 바다이야기 2 또는 야마토 2로 기본 매커니즘을 먼저 마스터하십시오.',
    evidence: '구조를 알고 즐길 때 불필요한 베팅 혼선을 줄이고 건전한 플레이가 가능합니다.'
  },
  {
    id: 6,
    number: '06',
    title: '과도한 "첫 충전 100% 보너스" 현혹',
    danger: '지나치게 파격적인 무료 머니나 100% 매칭 보너스를 내세우는 곳은 출금 롤링 조건을 1,000% 이상으로 묶어두거나 원금 출금조차 가로막는 전형적인 유인 수법입니다.',
    solution: '현혹적인 마케팅 문구보다 고객센터의 실시간 응답성, 보안 무설치 기술, 안정적인 환전 검증 여부를 최우선으로 평가하십시오.',
    evidence: '정직한 플랫폼은 비현실적인 공짜 미끼보다 안정된 서버와 빠른 출금 신뢰도를 제공합니다.'
  }
];

export interface GlossaryTerm {
  term: string;
  termEn: string;
  category: '기본 구조' | '확률 / 수치' | '심볼 / 기능';
  definition: string;
  details: string;
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: '릴',
    termEn: 'Reel',
    category: '기본 구조',
    definition: '세로 방향으로 회전하는 원통형 드럼으로 릴게임의 가장 기초적인 기계적/디지털 단위.',
    details: '통상 3개 또는 5개의 릴로 구성되며, 플레이 버튼 입력 시 독립적으로 가속 회전하다 정해진 알고리즘에 따라 차례대로 정지하여 심볼 배치를 완성합니다.'
  },
  {
    term: '페이라인',
    termEn: 'Pay Line',
    category: '기본 구조',
    definition: '심볼의 유효 당첨 조합이 인정되는 가로, 대각선, 지그재그의 라인 경로.',
    details: '고전 릴게임은 중앙 가로 1줄만 인정했으나, 최신 5릴 게임은 상하좌우 및 지그재그를 조합해 9개, 15개, 20개, 최대 40개 이상의 멀티 페이라인을 형성합니다.'
  },
  {
    term: '난수발생기',
    termEn: 'RNG (Random Number Generator)',
    category: '확률 / 수치',
    definition: '인간의 예측이 원천적으로 불가능한 수학적 무작위 숫자를 밀리초 단위로 생성하는 핵심 소프트웨어 엔진.',
    details: '사용자가 버튼을 누른 바로 그 찰나의 순간(0.001초 미만)에 생성된 난수 값에 의해 릴이 멈출 심볼 위치가 이미 확정되며, 이전 판의 결과와 무관하게 완전 독립시행을 보장합니다.'
  },
  {
    term: '환수율',
    termEn: 'RTP (Return to Player)',
    category: '확률 / 수치',
    definition: '장기적으로 플레이어에게 투입 금액 대비 통계적으로 반환되는 이론적 비율(%).',
    details: '예컨대 RTP 95%란 1억 원 규모의 대규모 시뮬레이션 시 장기 평균 9,500만 원이 반환됨을 의미하며, 단기적인 10~100판에서는 분산(Variance)에 의해 편차가 큽니다.'
  },
  {
    term: '와일드 심볼',
    termEn: 'Wild Symbol',
    category: '심볼 / 기능',
    definition: '카드 게임의 조커처럼 다른 일반 심볼의 자리를 대체하여 라인을 완성시켜 주는 만능 심볼.',
    details: '예: [고래]-[와일드]-[고래] 배치 시 [고래 3연속]으로 자동 인정됩니다. 확장 와일드(Expanding Wild)는 릴 세로 전체를 와일드로 덮기도 합니다.'
  },
  {
    term: '스캐터 심볼',
    termEn: 'Scatter Symbol',
    category: '심볼 / 기능',
    definition: '특정 페이라인 선상에 나란히 정렬되지 않아도 화면 전체에 지정 개수 이상 나타나면 효과를 발휘하는 흩뿌림 심볼.',
    details: '대개 화면 어디에든 3개 이상의 스캐터 심볼이 동시에 등장하면 보너스 라운드 또는 프리 스핀(Free Spins)을 격발시키는 트리거 역할을 합니다.'
  },
  {
    term: '보너스 게임 / 피버 모드',
    termEn: 'Bonus Game / Fever Mode',
    category: '심볼 / 기능',
    definition: '특정 조건 달성 시 일반 릴 회전 화면에서 특수 인터랙티브 화면으로 전환되는 고배당 구간.',
    details: '전용 사운드트랙과 화려한 컷씬이 재생되며, 추가 베팅 비용 없이 무료 회전 기회가 주어지거나 높은 승수가 곱해진 특별 심볼이 집중 출현합니다.'
  },
  {
    term: '배당률',
    termEn: 'Payout Odds / Multiplier',
    category: '확률 / 수치',
    definition: '특정 심볼 조합 완성 시 기본 베팅 금액에 곱해져 지급되는 승수 배율.',
    details: '출현 확률이 매우 희박한 황금 고래, 파동포 5연속 등의 조합은 수백~수천 배의 배당률을 가지며, 흔한 조개나 불가사리는 2~5배의 소액 배당률을 가집니다.'
  },
  {
    term: '프리 스핀',
    termEn: 'Free Spins',
    category: '심볼 / 기능',
    definition: '플레이어의 크레딧 차감 없이 무료로 부여되는 지정 횟수의 연속 릴 회전 기회.',
    details: '보너스 게임의 대표적인 형태로, 프리 스핀 구간 동안에는 2배~5배의 승수 멀티플라이어가 기본 탑재되는 경우가 많습니다.'
  }
];

export interface FaqItem {
  id: number;
  category: '기기 및 환경' | '확률 및 기술' | '게임 선택' | '안전 수칙';
  question: string;
  directAnswer: string;
  detailedExplanation: string;
}

export const FAQS_DATA: FaqItem[] = [
  {
    id: 1,
    category: '기기 및 환경',
    question: '아이폰(iOS / Safari)에서도 릴게임을 구동할 수 있나요?',
    directAnswer: '네, 100% 무설치 웹 표준 브라우저 방식으로 사파리에서 완벽히 실행됩니다.',
    detailedExplanation: '과거에는 PC 전용 실행 파일(.exe)이 필요했으나, 현재 최신 릴게임 포털은 HTML5 Canvas 및 WebGL 기술을 기반으로 개발되어 아이폰의 사파리(Safari), 안드로이드의 크롬(Chrome) 등 모든 모바일 브라우저에서 앱스토어 심사나 별도 파일 설치 없이 즉시 구동됩니다.'
  },
  {
    id: 2,
    category: '기기 및 환경',
    question: '무설치(웹 브라우저) 방식과 설치형 프로그램 중 무엇이 안전한가요?',
    directAnswer: '무설치 브라우저 방식이 보안성과 기기 안전 면에서 압도적으로 우수합니다.',
    detailedExplanation: '설치형(.exe, .apk) 파일은 악성코드, 원격 조종 툴, 개인 금융 데이터 탈취 위험이 존재하며 출처가 불분명한 경우가 많습니다. 반면 무설치 웹 방식은 브라우저 샌드박스 내부에서만 실행되므로 기기 파일 시스템에 전혀 접근할 수 없어 100% 안전합니다.'
  },
  {
    id: 3,
    category: '확률 및 기술',
    question: '모바일 버전과 PC 버전의 당첨 확률이 다를 수 있나요?',
    directAnswer: '정상적인 서버 아키텍처라면 기기 종류에 따른 확률 차이는 전혀 없습니다.',
    detailedExplanation: '릴게임의 연산은 클라이언트 기기(스마트폰/PC)가 아니라 중앙 서버의 난수 발생기(RNG)에서 일괄 처리됩니다. 따라서 화면의 해상도나 터치 UI 레이아웃만 다를 뿐, 백엔드에서 생성되는 확률 분포와 페이라인 계산 알고리즘은 100% 동일합니다.'
  },
  {
    id: 4,
    category: '확률 및 기술',
    question: '릴게임의 난수 발생기(RNG)는 외부에서 조작될 수 있나요?',
    directAnswer: '이용자의 물리적 행동이나 외부 조작은 불가능하며 매 회차 독립적으로 연산됩니다.',
    detailedExplanation: 'RNG는 수학적 암호화 함수를 통해 매 0.001초마다 시드(Seed)를 갱신합니다. 플레이어가 버튼을 누르는 순간 바로 그 시점의 난수가 선택되어 정지 위치가 확정됩니다. 버튼을 세게 누르거나 특정 템포로 연타하더라도 난수 생성 주기에 인간이 물리적으로 개입하는 것은 불가능합니다.'
  },
  {
    id: 5,
    category: '확률 및 기술',
    question: '"많이 잃었으니 곧 당첨될 차례"라는 말이 과학적 사실인가요?',
    directAnswer: '완전히 틀린 미신이며 수학적으로 "도박사의 오류"라고 부릅니다.',
    detailedExplanation: '동전을 9번 연속 던져 앞면이 나왔더라도 10번째 던질 때 앞면이 나올 확률은 여전히 50%입니다. RNG 기반 릴게임 역시 직전 100번의 회차 결과를 저장하거나 보상하는 기억 장치가 없습니다. 매 판마다 당첨 확률은 독립적으로 동일하게 부여됩니다.'
  },
  {
    id: 6,
    category: '확률 및 기술',
    question: 'RTP(환수율)와 배당률(Payout)의 차이는 무엇인가요?',
    directAnswer: 'RTP는 장기적인 총 반환 비율이며, 배당률은 개별 조합 완성 시의 배수입니다.',
    detailedExplanation: 'RTP(Return to Player)는 수십만 번의 누적 베팅 시 총 투입금 대비 플레이어에게 반환되는 이론적 통계치입니다. 반면 배당률은 예를 들어 [상어 3개] 완성 시 베팅 금액의 50배를 지급하는 개별 규칙의 배수를 뜻합니다. 배당률이 높다고 해서 반드시 환수율이 높은 것은 아닙니다.'
  },
  {
    id: 7,
    category: '게임 선택',
    question: '릴게임 입문자에게 가장 먼저 추천하는 게임은 무엇인가요?',
    directAnswer: '시각적 피로도가 적고 구조가 직관적인 "바다이야기"를 가장 권장합니다.',
    detailedExplanation: '바다이야기는 여유로운 릴 회전 속도와 명확한 해양 생물 심볼, 안정적인 3릴/5릴 페이라인 구조를 갖추고 있습니다. 회차 진행이 너무 빠르지 않아 릴의 정지 원리와 심볼 조합을 차분하게 이해하고 분석하기에 최적입니다.'
  },
  {
    id: 8,
    category: '게임 선택',
    question: '야마토 2, 야마토 3, 야마토 5는 무엇이 다른가요?',
    directAnswer: '시리즈가 올라갈수록 릴 개수와 페이라인 밀도가 높아져 게임이 복잡해집니다.',
    detailedExplanation: '야마토 2는 단일한 릴 조합의 빠른 회차 진행에 집중된 표준형입니다. 야마토 3는 함대 대전 보너스 씬이 강화되었으며, 야마토 5는 멀티라인 파동포 시스템이 도입되어 한 번에 수십 가지 경우의 수가 연산되는 복합형입니다. 초보자는 2부터 시작하는 것이 안전합니다.'
  },
  {
    id: 9,
    category: '게임 선택',
    question: '손오공 릴게임은 바다이야기나 야마토와 어떤 점이 다른가요?',
    directAnswer: '서유기 원작 캐릭터들의 관계성과 서사적 스토리 컷씬이 핵심입니다.',
    detailedExplanation: '바다이야기와 야마토가 심볼 일치 중심의 간결한 비주얼을 제공한다면, 손오공은 손오공, 저팔계, 사오정, 우마왕 등 인물 조합에 따라 전투 애니메이션과 스토리 분기가 펼쳐져 한 편의 애니메이션을 보는 듯한 엔터테인먼트 요소가 강합니다.'
  },
  {
    id: 10,
    category: '게임 선택',
    question: '바다이야기와 야마토 중 어느 쪽이 당첨이 더 잘 되나요?',
    directAnswer: '당첨 난이도의 우열은 없으며 플레이 템포와 연출 취향에 따른 선택입니다.',
    detailedExplanation: '두 게임 모두 독립 RNG 방식을 사용하므로 어느 특정 게임이 더 일방적으로 유리하다고 단정할 수 없습니다. 차분하고 긴 호흡을 원한다면 바다이야기, 단시간에 신속하고 강렬한 사운드의 회차 순환을 원한다면 야마토를 선택하는 것이 올바른 기준입니다.'
  },
  {
    id: 11,
    category: '안전 수칙',
    question: '릴게임 사이트에서 사기나 먹튀 피해를 방지하려면 어떻게 해야 하나요?',
    directAnswer: '비현실적인 첫 충전 이벤트에 속지 말고, 무설치와 고객센터 응답성을 확인하십시오.',
    detailedExplanation: '"신규 첫 충전 100% 추가 지급", "무조건 잭팟 보장" 같은 허위 과장 광고를 하는 곳은 출금 시 부당한 롤링 조건을 걸어 자금을 동결시킵니다. 정식 무설치 웹 표준을 지원하고 실시간 고객 문의 창구가 원활히 소통되는 검증된 플랫폼만 이용해야 합니다.'
  },
  {
    id: 12,
    category: '안전 수칙',
    question: '좋은 릴게임 사이트를 고르는 3대 핵심 기준은 무엇인가요?',
    directAnswer: '1. 제공 버전 명시, 2. 무설치 웹 표준 지원, 3. 실시간 고객 문의 채널 작동 여부입니다.',
    detailedExplanation: '첫째, 바다이야기2인지 5인지 버전을 투명하게 명시해야 하며, 둘째, 백도어 위험이 없는 브라우저 접속 방식을 지원해야 하고, 셋째, 문제 발생 시 즉각 응답하는 고객 지원팀이 상주해야 합니다. 이 중 하나라도 미흡하면 즉시 이용을 중단해야 합니다.'
  },
  {
    id: 13,
    category: '안전 수칙',
    question: '유튜브나 블로그의 "릴게임 필승 공략법"을 믿어도 되나요?',
    directAnswer: '절대 믿어서는 안 됩니다. 100% 호객용 허위 마케팅입니다.',
    detailedExplanation: '릴게임의 승패는 RNG에 의해 결정되므로 물리적인 시간 타이밍 공략이나 연타 비법은 수학적으로 성립할 수 없습니다. 이러한 공략글의 대부분은 특정 사이트로 회원을 유치하기 위해 만들어낸 허위 정보입니다.'
  },
  {
    id: 14,
    category: '안전 수칙',
    question: '릴게임 이용 시 절대 하지 말아야 할 3가지는 무엇인가요?',
    directAnswer: '1. 출처 불명 파일 설치, 2. 도박사의 오류에 따른 무리한 증액, 3. 검증 안 된 패턴 맹신입니다.',
    detailedExplanation: '첫째, 스마트폰이나 PC에 수상한 설치 파일을 깔지 말 것. 둘째, 이전 판에서 안 나왔다고 무리하게 투입 금액을 키우지 말 것. 셋째, 인터넷의 비과학적인 필승 패턴을 맹신하지 말고 엔터테인먼트 한도 내에서 건전하게 즐길 것입니다.'
  },
  {
    id: 15,
    category: '안전 수칙',
    question: '릴통(REELTONG)은 어떤 역할을 하는 웹사이트인가요?',
    directAnswer: '국내 릴게임의 공학적 메커니즘을 객관적으로 분석해 전달하는 중립적 정보 아카이브입니다.',
    detailedExplanation: '릴통은 특정 업체의 허위 광고나 당첨 보장성 문구를 철저히 배제하고, 통기계 매장 오리지널 연출과 RNG 난수 생성 원리, 게임별 페이라인 규격, 초보자 안전 수칙 및 최신 무설치 기술 트렌드를 사실에 기반해 제공하는 프리미엄 정보 허브입니다.'
  },
  {
    id: 16,
    category: '기기 및 환경',
    question: 'PC에서 하던 플레이를 모바일 스마트폰에서 이어서 할 수 있나요?',
    directAnswer: '네, 계정 기반의 클라우드 동기화 시스템을 갖춘 무설치 플랫폼에서는 완벽히 연동됩니다.',
    detailedExplanation: '최신 웹 플랫폼은 사용자의 계정 크레딧과 게임 세션 데이터를 서버 데이터베이스에 실시간 동기화하므로, 사무실 PC 브라우저에서 이용하던 상태 그대로 이동 중 스마트폰 브라우저로 로그인하여 연속 플레이가 가능합니다.'
  }
];
