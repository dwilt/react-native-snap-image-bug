const periwinkleAvatarHappy = require(`../assets/images/avatars/periwinkleAvatarHappy.png`);
const periwinkleAvatarNeutral = require(`../assets/images/avatars/periwinkleAvatarNeutral.png`);
const periwinkleAvatarSad = require(`../assets/images/avatars/periwinkleAvatarSad.png`);

const yellowGirlAvatarHappy = require(`../assets/images/avatars/yellowGirlAvatarHappy.png`);
const yellowGirlAvatarNeutral = require(`../assets/images/avatars/yellowGirlAvatarNeutral.png`);
const yellowGirlAvatarSad = require(`../assets/images/avatars/yellowGirlAvatarSad.png`);

const blueAvatarHappy = require(`../assets/images/avatars/blueAvatarHappy.png`);
const blueAvatarNeutral = require(`../assets/images/avatars/blueAvatarNeutral.png`);
const blueAvatarSad = require(`../assets/images/avatars/blueAvatarSad.png`);

const yellowBoyAvatarHappy = require(`../assets/images/avatars/yellowBoyAvatarHappy.png`);
const yellowBoyAvatarNeutral = require(`../assets/images/avatars/yellowBoyAvatarNeutral.png`);
const yellowBoyAvatarSad = require(`../assets/images/avatars/yellowBoyAvatarSad.png`);

const redAvatarHappy = require(`../assets/images/avatars/redAvatarHappy.png`);
const redAvatarNeutral = require(`../assets/images/avatars/redAvatarNeutral.png`);
const redAvatarSad = require(`../assets/images/avatars/redAvatarSad.png`);

const periwinkleAvatar = new Map([
    [`id`, `periwinkleAvatar`],
    [`happy`, periwinkleAvatarHappy],
    [`neutral`, periwinkleAvatarNeutral],
    [`sad`, periwinkleAvatarSad],
]);

const yellowGirlAvatar = new Map([
    [`id`, `yellowGirlAvatar`],
    [`happy`, yellowGirlAvatarHappy],
    [`neutral`, yellowGirlAvatarNeutral],
    [`sad`, yellowGirlAvatarSad],
]);

const blueAvatar = new Map([
    [`id`, `blueAvatar`],
    [`happy`, blueAvatarHappy],
    [`neutral`, blueAvatarNeutral],
    [`sad`, blueAvatarSad],
]);

const yellowBoyAvatar = new Map([
    [`id`, `yellowBoyAvatar`],
    [`happy`, yellowBoyAvatarHappy],
    [`neutral`, yellowBoyAvatarNeutral],
    [`sad`, yellowBoyAvatarSad],
]);

const redAvatar = new Map([
    [`id`, `redAvatar`],
    [`happy`, redAvatarHappy],
    [`neutral`, redAvatarNeutral],
    [`sad`, redAvatarSad],
]);

export const avatars = [
    periwinkleAvatar,
    yellowGirlAvatar,
    blueAvatar,
    yellowBoyAvatar,
    redAvatar,
];
