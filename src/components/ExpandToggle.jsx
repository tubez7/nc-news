import { useState } from "react";

export default function ExpandToggle() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible((currentVisible) => !currentVisible);
    }

    return (
    <div></div>
    )
} 