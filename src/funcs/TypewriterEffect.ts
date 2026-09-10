import { useEffect, useState } from "react";


type TypewriterItem = { text: string; color: string };

export const useTypewriterEffect = (textList: TypewriterItem[]) => {
    const [displayText, setDisplayText] = useState('');
    const [textColor, setTextColor] = useState(textList[0].color);

    useEffect(() => {
        let isMounted = true;
        const waitForMs = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        const runCarousel = async () => {
            let i = 0;
            while (isMounted) {
                const currentItem = textList[i];
                setTextColor(currentItem.color);

                for (let j = 0; j <= currentItem.text.length; j++) {
                    if (!isMounted) return;
                    setDisplayText(currentItem.text.substring(0, j));
                    await waitForMs(80);
                }

                await waitForMs(1500);

                for (let j = currentItem.text.length; j >= 0; j--) {
                    if (!isMounted) return;
                    setDisplayText(currentItem.text.substring(0, j));
                    await waitForMs(30);
                }

                await waitForMs(300);
                i = (i + 1) % textList.length;
            }
        };

        runCarousel();

        return () => {
            isMounted = false;
        };
    }, [textList]);

    return { displayText, textColor };
};