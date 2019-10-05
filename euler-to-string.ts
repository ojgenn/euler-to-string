function eulerToString(num: number): string {
    const regex = /^(\d+)\.?(\d+)?[eE]([-+]?)(\d+)$/;
    const numToString: string = num.toString();
    const regExpMatchArray: RegExpMatchArray = numToString.match(regex);

    if (regExpMatchArray) {
        const fraction: string = regExpMatchArray[2];

        const nullCounter: number = (regExpMatchArray[3] === '-') ? Number(regExpMatchArray[4]) - 1 : Number(regExpMatchArray[4]) - fraction.length;
        const nullableString: string = new Array(nullCounter).fill(0).join('');

        if (regExpMatchArray[3] == '-') {
            return `0.${nullableString}${regExpMatchArray[1]}${!!fraction ? fraction : ''}`;
        }

        return regExpMatchArray[1] + fraction + nullableString;
    }

    return numToString;
}
