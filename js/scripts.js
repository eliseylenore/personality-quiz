$(document).ready(function() {
  $("form#personality-quiz").submit(function(event) {
    event.preventDefault();
    $(".hide-me").hide();
    var stressCount = 0;
    $("input:checkbox[name=activities]:checked").each(function() {
      var vacationActivities = parseInt($(this).val());
      stressCount += vacationActivities;
    });
    $("input:checkbox[name=conflict]:checked").each(function() {
      var vacationConflict = parseInt($(this).val());
      stressCount += vacationConflict;
    });
    $("input:checkbox[name=lodging]:checked").each(function() {
      var vacationLodging = parseInt($(this).val());
      stressCount += vacationLodging;
    });
    if (stressCount <= 10) {
      $("#chill-result").show();
    } else if (stressCount <= 20) {
      $("#okay-result").show();
    } else {
      $("#stressed-result").show();
    }

  });
});
