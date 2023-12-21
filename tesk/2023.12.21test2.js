/*
 * 🍬 사탕 나누기
 * - A가 가지고 있는 candies를 N명의 friends에게 공평하게 나누어 줄 때,
 * - 각 friends가 가져갈 수 있는 candies의 개수를 구하는 함수를 작성하세요.
 *
 * ❗️ 제한 조건 ❗️
 * - 입력되는 수는 양의 정수입니다.
 * - 반환되는 값은 정수로 나와야 합니다.
 */

function question(candies, friends) {
    // 사탕을 공평하게 나눠줄 수 있는 경우
    if (candies >= friends && friends > 0) {
      // 각 친구가 가져갈 수 있는 사탕의 개수 계산
      const candiesPerFriend = Math.floor(candies / friends);
      return candiesPerFriend;
    } else {
      // 사탕을 공평하게 나눌 수 없는 경우
      return "나눌 수 없습니다.";
    }
  }
  
  // 테스트 코드
  Test(
    question,
    [
      [32, 6],
      [56, 4],
      [34, 5],
      [73, 6],
      [23, 3],
      [45, 7],
      [89, 8],
      [73, 9],
    ],
    [5, 14, 6, 12, 7, 6, 11, 8]
  );
  
  function Test(question, conditions, results) {
    for (let index in results) {
      const result = question(...conditions[index]) === results[index];
      console.log(`테스트 ${+index + 1}`, result);
      if (!result) {
        console.log("테스트에 통과하지 못했습니다.");
        return;
      }
    }
  
    console.log("테스트에 통과하셨습니다!");
  }
  