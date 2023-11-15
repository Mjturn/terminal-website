const terminal = document.getElementById("terminal");
const commands = {
  help: "Lists available commands",
  chbg: 'Changes the background color. Type this command followed by your choice of color. Type this command followed by "colors" to see the list of colors available.',
  chtc: 'Changes the text color. Type this command followed by your choice of color. Type this command followed by "colors" to see the list of colors available.',
  cl: "Clears terminal output",
};

terminal.value = `A terminal website made by Matthew Turner\n\nType "help" for a list of commands.\n${terminal.value}`;

terminal.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const lines = terminal.value.split("\n");
    const userInput = lines[lines.length - 1]
      .trim()
      .substring("user:~$ ".length);

    switch (userInput) {
      case "help":
        displayCommands();
        break;
      case "chbg white":
        changeBackgroundColor("white");
        break;
      case "chbg blue":
        changeBackgroundColor("rgb(4, 55, 242)");
        break;
      case "chbg black":
        changeBackgroundColor("black");
        break;
      case "chbg colors":
        terminal.value += "\nWhite,\nBlue,\nBlack";
        break;
      case "chtc white":
        changeTextColor("white");
        break;
      case "chtc black":
        changeTextColor("black");
        break;
      case "chtc colors":
        terminal.value += "\nWhite,\nBlack";
        break;
      case "cl":
        clearTerminal();
        break;
      default:
        terminal.value +=
          '\nUnknown command. Type "help" for a list of commands.';
    }

    if (userInput !== "cl") {
      terminal.value += "\nuser:~$ ";
    }
  }
});

function displayCommands() {
  for (const command in commands) {
    terminal.value += `\n${command} - ${commands[command]}`;
  }
}

function changeBackgroundColor(color) {
  terminal.style.backgroundColor = color;
}

function changeTextColor(color) {
  terminal.style.color = color;
}

function clearTerminal() {
  terminal.value = `A terminal website made by Matthew Turner\n\nType "help" for a list of commands.\nuser:~$ `;
}
