$(document).ready(function() {
  $("form#personality-quiz").submit(function(event) {
    event.preventDefault();
    var stressCount = 0;

    $("input:checkbox[name=activities]:checked").each(function() {
      var vacationActivites = $(this).val();
      stressCount += vacationActivites.parseInt();
    });

    $("input:checkbox[name=conflict]:checked").each(function() {
      var vacationConflict = $(this).val();
      stressCount += vacationConflict.parseInt();
    });

    $("input:checkbox[name=lodging]:checked").each(function() {
      var vacationLodging = $(this).val();
      stressCount += vacationLodging.parseInt();
    });
  });
});
