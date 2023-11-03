function turn_180_deg(parameter) {
  switch (parameter) {
    case "question-1":
      let text_1 = "You can invite as many as you want.";

      show_detail(
        "question-1",
        text_1,
        "question-2",
        "question-3",
        "question-4",
        "question-5"
      );

      break;
    case "question-2":
      let text_2 =
        "No more than 2GB. All files in your account must fit your alloted storage space.";
      show_detail(
        "question-2",
        text_2,
        "question-1",
        "question-3",
        "question-4",
        "question-5"
      );
      break;
    case "question-3":
      let text_3 = "You can do it by clicking the link under the login form.";
      show_detail(
        "question-3",
        text_3,
        "question-1",
        "question-2",
        "question-4",
        "question-5"
      );
      break;
    case "question-4":
      let text_4 = "Of course, at any time.";
      show_detail(
        "question-4",
        text_4,
        "question-1",
        "question-2",
        "question-3",
        "question-5"
      );
      break;
    case "question-5":
      let text_5 = "Yes, visit our website to see more details.";
      show_detail(
        "question-5",
        text_5,
        "question-1",
        "question-2",
        "question-3",
        "question-4"
      );
      break;
  }
}

function show_detail(id, text, id1, id2, id3, id4) {
  let number_of_children = document.getElementById(id).childElementCount;

  /* Remove all children before inserting */
  close_all_details(id1, id2, id3, id4);

  if (number_of_children == 1) {
    let container = document.getElementById(id).lastElementChild;
    container.firstElementChild.style.fontWeight = "700";
    let my_arrow = container.lastElementChild;
    my_arrow.style.transform = "rotate(180deg)";
    let detail = document.createElement("p");
    detail.innerHTML = text;
    detail.style.fontSize = "0.8rem";
    detail.style.marginBottom = "20px";

    document.getElementById(id).appendChild(detail);
  } else {
    document
      .getElementById(id)
      .removeChild(document.getElementById(id).lastElementChild);
    let container = document.getElementById(id).lastElementChild;
    container.firstElementChild.style.fontWeight = "400";
    let my_arrow = container.lastElementChild;
    my_arrow.style.transform = "rotate(360deg)";
  }
}

function close_all_details(id1, id2, id3, id4) {
  let number1 = document.getElementById(id1).childElementCount;
  let number2 = document.getElementById(id2).childElementCount;
  let number3 = document.getElementById(id3).childElementCount;
  let number4 = document.getElementById(id4).childElementCount;

  if (number1 > 1) {
    document
      .getElementById(id1)
      .removeChild(document.getElementById(id1).lastElementChild);
    document.getElementById(
      id1
    ).firstElementChild.firstElementChild.style.fontWeight = "400";

    let container = document.getElementById(id1).firstElementChild;
    let my_arrow = container.lastElementChild;
    my_arrow.style.transform = "rotate(360deg)";
  }

  if (number2 > 1) {
    document
      .getElementById(id2)
      .removeChild(document.getElementById(id2).lastElementChild);
    document.getElementById(
      id2
    ).firstElementChild.firstElementChild.style.fontWeight = "400";

    let container = document.getElementById(id2).firstElementChild;
    let my_arrow = container.lastElementChild;
    my_arrow.style.transform = "rotate(360deg)";
  }

  if (number3 > 1) {
    document
      .getElementById(id3)
      .removeChild(document.getElementById(id3).lastElementChild);
    document.getElementById(
      id3
    ).firstElementChild.firstElementChild.style.fontWeight = "400";

    let container = document.getElementById(id3).firstElementChild;
    let my_arrow = container.lastElementChild;
    my_arrow.style.transform = "rotate(360deg)";
  }

  if (number4 > 1) {
    document
      .getElementById(id4)
      .removeChild(document.getElementById(id4).lastElementChild);
    document.getElementById(
      id4
    ).firstElementChild.firstElementChild.style.fontWeight = "400";

    let container = document.getElementById(id4).firstElementChild;
    let my_arrow = container.lastElementChild;
    my_arrow.style.transform = "rotate(360deg)";
  }
}
