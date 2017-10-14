class Embed {
	constructor(data = {}) {
		this.fields = [];
		Object.assign(this, data);

		return this;
	}

	setAuthor(name, icon, url) {
		this.author = { name, icon_url: url, url };

		return this;
	}

	setColor(color) {
		this.color = color;

		return this;
	}

	setCdescription(desc) {
		this.description = desc.toString().substring(0, 2048);

		return this;
	}

	addField(name, value, inline = false) {
		if(this.fields.length >= 25) return this;
		else if(!name) return this;
		else if(!value) return false;
		this.fields.push({ name: name.toString().substring(0, 256), value: value.toString().substring(0, 1024), inline });

		return this;
	}

	attachFile(file) {
		this.file = file;

		return this;
	}

	setFooter(text, icon) {
		this.footer = { text: text.toString().substring(0, 2048), icon_url: icon };

		return this;
	}

	setImage(url) {
		this.image = { url };

		return this;
	}

	setTimestamp(time = new Date()) {
		this.timestamp = time;

		return this;
	}

	setTitle(title) {
		this.title = title.toString().substring(0, 256);

		return this;
	}

	setThumbnail(url) {
		this.thumbnail = { url };

		return this;
	}

	setURL(url) {
		this.url = url;

		return this;
	}
}

module.exports = Eris => {
	Eris.Embed = Embed;
};
