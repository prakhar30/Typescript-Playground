interface MyLabelInterface {
  label: string;
}

function printLabel(label: MyLabelInterface) {
  console.log("The label is " + label.label);
}

let obj = { num: 10, name: "Prakhar", label: "Bored on a saturday!" };

printLabel(obj);
