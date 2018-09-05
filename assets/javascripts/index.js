var showText = function(target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function() {
      showText(target, message, index, interval);
    }, interval);
  }
}
$(document).ready(function() {
  showText('.sub-name', 'oftware engineer', 0, 100);
});
