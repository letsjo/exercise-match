const TranslateCates = (word, translateTo="ko") => {
  const interestLists = [
    { en: "running", ko: "조깅&러닝" },
    { en: "riding", ko: "라이딩" },
    { en: "gym", ko: "헬스" },
    { en: "hiking", ko: "등산" },
    { en: "ballet", ko: "발레" },
    { en: "climbing", ko: "클라이밍" },
    { en: "pilates", ko: "필라테스" },
    { en: "swimming", ko: "수영" },
    { en: "boxing", ko: "복싱" },
    { en: "bowling", ko: "볼링" },
    { en: "badminton", ko: "배드민턴" },
    { en: "crossfit", ko: "크로스핏" },
    { en: "gymnastics", ko: "체조" },
    { en: "skateboard", ko: "보드" },
    { en: "golf", ko: "골프" },
    { en: "skate", ko: "스케이트" },
    { en: "pocketball", ko: "당구" },
    { en: "ski", ko: "스키" },
    { en: "futsal", ko: "풋살" },
    { en: "tennis", ko: "테니스" },
    { en: "pingpong", ko: "탁구" },
    { en: "basketball", ko: "농구" },
    { en: "soccer", ko: "축구" },
    { en: "volleyball", ko: "배구" },
    { en: "baseball", ko: "야구" },
  ];
  const findIndex = interestLists.findIndex((i)=> i[translateTo=="ko"?"en":"ko"] == word) 
  return findIndex!=-1?interestLists[findIndex][translateTo]:"-"
};

export default TranslateCates;
