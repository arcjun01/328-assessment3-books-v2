window.addEventListener('DOMContentLoaded', loadReviews);

async function loadReviews() {
    try {
      const res = await fetch('/api/reviews');
      const data = await res.json();

      console.log(data);
      renderReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
}

