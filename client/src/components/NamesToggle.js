import { useState } from "react";
import NamesList from "./NamesList";

function NamesToggle(props) {

  const [showingHidden, setShowingHidden] = useState(false);

  return (
    <div>
      <button style={styles.button} onClick={() => setShowingHidden(!showingHidden)}>{showingHidden ? "Hide entered crushes" : "Show entered crushes"}</button>
      {showingHidden && <NamesList></NamesList>}
    </div>
  );
}

const styles = {
  button: {
    marginTop: 20,
    borderRadius: 5,
  }
};

export default NamesToggle;