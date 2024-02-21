document.addEventListener("DOMContentLoaded", function () {
  const datePicker = document.getElementById("y24-datePicker");
  const calendar = document.getElementById("y24-calendar");

  datePicker.addEventListener("click", function (event) {
    event.stopPropagation();
    calendar.style.display = "grid";
    drawCalendars();
  });

  document.addEventListener("click", function () {
    calendar.style.display = "none";
  });

  calendar.addEventListener("click", function (event) {
    event.stopPropagation(); // カレンダー内のクリックイベントの伝播を停止
  });

  let selectedDate = null;
  const today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth();

  function goToPrevMonth(event) {
    event.stopPropagation();
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    drawCalendars();
  }

  function goToNextMonth(event) {
    event.stopPropagation();
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    drawCalendars();
  }

  function drawCalendars() {
    const windowWidth = window.innerWidth;
    const numCalendars = windowWidth < 992 ? 1 : 2;
    calendar.innerHTML =
      `<button onclick="goToPrevMonth(event)">＜</button>` +
      `<button onclick="goToNextMonth(event)">＞</button>`;
    for (let i = 0; i < numCalendars; i++) {
      let monthOffset = currentMonth + i;
      let yearOffset = currentYear;
      if (monthOffset > 11) {
        monthOffset -= 12;
        yearOffset++;
      }
      drawCalendar(yearOffset, monthOffset, i);
    }
  }

  function drawCalendar(year, month, calendarIndex) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const monthNames = [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
      // "January",
      // "February",
      // "March",
      // "April",
      // "May",
      // "June",
      // "July",
      // "August",
      // "September",
      // "October",
      // "November",
      // "December",
    ];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let calendarHTML = `<div class="calendar-instance"><div class="calendar-header">${year} ${monthNames[month]} </div><table><thead><tr>`;
    dayNames.forEach((day) => {
      calendarHTML += `<th>${day}</th>`;
    });
    calendarHTML += "</tr></thead><tbody>";

    let day = 1;
    for (let i = 0; i < 6; i++) {
      calendarHTML += "<tr>";
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay.getDay()) {
          calendarHTML += "<td></td>";
        } else if (day > lastDay.getDate()) {
          break;
        } else {
          const fullDate = new Date(year, month, day);
          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();
          const isSelected =
            selectedDate &&
            selectedDate.toDateString() === fullDate.toDateString();
          let className = isToday ? "today" : "";
          className += isSelected ? " selected" : "";
          calendarHTML += `<td class="${className}" onclick="selectDate(event, ${year}, ${month}, ${day})">${day}</td>`;
          day++;
        }
      }
      calendarHTML += "</tr>";
      if (day > lastDay.getDate()) {
        break;
      }
    }

    calendarHTML += "</tbody></table></div>";
    calendar.innerHTML += calendarHTML;
  }

  window.selectDate = function (event, year, month, day) {
    event.stopPropagation();
    selectedDate = new Date(year, month, day);
    datePicker.value = `${year}-${month + 1}-${day}`.replace(
      /-(\d)\b/g,
      "-0$1"
    );
    drawCalendars();
  };

  window.goToPrevMonth = goToPrevMonth;
  window.goToNextMonth = goToNextMonth;
});
