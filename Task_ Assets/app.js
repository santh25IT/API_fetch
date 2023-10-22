function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
          const main = document.querySelector('main');
          data.forEach(comment => {
              const commentElement = document.createElement('div');
              commentElement.classList.add('comment');
              commentElement.innerHTML = `
                  <h3>${comment.name}</h3>
                  <p>Email: ${comment.email}</p>
                  <p>${comment.body}</p>
              `;
              main.appendChild(commentElement);
          });
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
}


fetchData();