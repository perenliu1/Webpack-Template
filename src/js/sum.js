export default function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}