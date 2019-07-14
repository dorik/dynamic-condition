function compare([left, type, right]) {
    switch (type) {
        case "===": {
            return left === right;
        }
        case "!==": {
            return left !== right;
        }
        case "==": {
            return left == right;
        }
        case "!=": {
            return left != right;
        }
        case ">": {
            return left > right;
        }
        case "<": {
            return left < right;
        }
        case ">=": {
            return left >= right;
        }
        case "<=": {
            return left <= right;
        }
        case "||": {
            return left || right;
        }
        case "&&": {
            return left && right;
        }
        default:
            return false;
    }
}

export default compare;
