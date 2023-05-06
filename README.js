<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Button Click Example</title>
    <style>
      /* CSS 스타일 시트 */
      button {
        font-size: 16px;
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <h1>버튼 클릭 예시</h1>
    <button id="myButton">클릭하세요</button>
    
    <script>
      // JavaScript 코드
      const myButton = document.getElementById('myButton');
      myButton.addEventListener('click', function() {
        alert('버튼이 클릭되었습니다!');
      });
    </script>
  </body>
</html>
