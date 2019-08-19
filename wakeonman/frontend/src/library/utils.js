// Return font color (black/white) depending on given color contrast.
// useRelativeLuminance uses relative calculation as recommended by W3C.
export const contrastFontColor = (colorHex, useRelativeLuminance = true) => {
    const color = {
        r: parseInt(colorHex.substring(1, 3), 16),
        g: parseInt(colorHex.substring(3, 5), 16),
        b: parseInt(colorHex.substring(5, 7), 16)
    };

    if (useRelativeLuminance) {
        // Return W3C compliant font color
        for (const [key, value] of Object.entries(color)) {
            let c = value / 255.0;
            color[key] = (c <= 0.03928) ?
                (c / 12.92) : ((c + 0.055) / 1.055) ** 2.4;
        }
        const relativeLuminance = 0.2126 * color.r
            + 0.7152 * color.g + 0.0722 * color.b;

        return (relativeLuminance > 0.179) ? '#000000' : '#FFFFFF';
    } else {
        // Return font color with simpler solution (not W3C compliant)
        return ((color.r * 0.299 + color.g * 0.587 + color.b * 0.114) > 186) ?
            '#000000' : '#FFFFFF';
    }
};
