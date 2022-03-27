Hooks.on("ready", () => ui.notifications.notify("Teal's Grit & Glory modifications loaded!"));
Hooks.on("i18nInit", () => {
	game.i18n.translations.DND5E.EquipmentLight = "Jack";
	game.i18n.translations.DND5E.EquipmentMedium = "Hauberk";
	game.i18n.translations.DND5E.EquipmentHeavy = "Cuirass";
});
