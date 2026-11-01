export function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString("ko-KR");
}

export function formatRating(rating) {
  if (rating === null) {
    return "별점 없음";
  }
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}
