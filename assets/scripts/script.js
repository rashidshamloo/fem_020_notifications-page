//remove unread class and icon from unread notifications
function markAllRead() {
  //get notification item container
  notificationBody = document.getElementsByClassName("notifications__body")[0];
  //for each notification item
  for (notificationItem of notificationBody.children) {
    //if the notification has the unread class, remove the class and unread icon
    if (notificationItem.classList.contains("notifications__item--unread")) {
      notificationItem.classList.remove("notifications__item--unread");
      notificationItem
        .getElementsByClassName("notifications__unread-icon")[0]
        .remove();
    }
  }
  //set notification count to zero
  document.getElementsByClassName("notifications__number")[0].textContent = 0;
  //return false so the "href" of the "a" tag doesn't trigger
  return false;
}
