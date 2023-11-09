document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Imagine Dragons',
                start: '2023-11-23',
                end:'2023-11-27'
            },
            {
                title: 'Maneskin',
                start: '2023-12-27',
                end:'2023-12-30'
            },
            {
                title: 'Green Day',
                start: '2023-12-10',
                end:'2023-12-13'
            }
        ]
    }); 

    calendar.render();
  });