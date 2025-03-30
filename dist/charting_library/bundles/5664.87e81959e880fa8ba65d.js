"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[5664], { 66076: e => { e.exports = { "default-drawer-min-top-distance": "100px", wrap: "wrap-_HnK0UIN", positionBottom: "positionBottom-_HnK0UIN", backdrop: "backdrop-_HnK0UIN", drawer: "drawer-_HnK0UIN", positionLeft: "positionLeft-_HnK0UIN" }; }, 34290: e => { e.exports = { emoji: "emoji-BsERGcZ1" }; }, 97662: e => { e.exports = { list: "list-JPoFARaG" }; }, 46809: e => { e.exports = { wrapper: "wrapper-VmCoyMWF" }; }, 11123: e => { e.exports = { wrapper: "wrapper-M14KUVdG", emojiItem: "emojiItem-M14KUVdG", hovered: "hovered-M14KUVdG" }; }, 17373: e => { e.exports = { wrapper: "wrapper-hoWtpNyh", isActive: "isActive-hoWtpNyh", button: "button-hoWtpNyh" }; }, 12134: e => { e.exports = { wrapper: "wrapper-RXEt_NWz" }; }, 89346: e => { e.exports = { wrapper: "wrapper-QWmdCZSA" }; }, 53737: e => { e.exports = { wrapper: "wrapper-mz0866M2", hovered: "hovered-mz0866M2" }; }, 13193: e => { e.exports = { wrapper: "wrapper-MeQD3kFA", button: "button-MeQD3kFA" }; }, 37558: (e, t, n) => {
            "use strict";
            n.d(t, { DrawerContext: () => i, DrawerManager: () => a });
            var o = n(50959), r = n(99054);
            class a extends o.PureComponent {
                constructor(e) { super(e), this._isBodyFixed = !1, this._addDrawer = e => { this.setState((t => ({ stack: [...t.stack, e] }))); }, this._removeDrawer = e => { this.setState((t => ({ stack: t.stack.filter((t => t !== e)) }))); }, this.state = { stack: [] }; }
                componentDidUpdate(e, t) { !t.stack.length && this.state.stack.length && ((0, r.setFixedBodyState)(!0), this._isBodyFixed = !0), t.stack.length && !this.state.stack.length && this._isBodyFixed && ((0, r.setFixedBodyState)(!1), this._isBodyFixed = !1); }
                componentWillUnmount() { this.state.stack.length && this._isBodyFixed && (0, r.setFixedBodyState)(!1); }
                render() { return o.createElement(i.Provider, { value: { addDrawer: this._addDrawer, removeDrawer: this._removeDrawer, currentDrawer: this.state.stack.length ? this.state.stack[this.state.stack.length - 1] : null } }, this.props.children); }
            }
            const i = o.createContext(null);
        }, 41590: (e, t, n) => {
            "use strict";
            n.d(t, { Drawer: () => v });
            var o = n(50959), r = n(50151), a = n(97754), i = n(36174), c = n(42842), l = n(37558), s = n(29197), m = n(86656), u = n(66076);
            function v(e) { const { position: t = "Bottom", onClose: n, children: m, className: v, theme: d = u } = e, p = (0, r.ensureNotNull)((0, o.useContext)(l.DrawerContext)), [f] = (0, o.useState)((() => (0, i.randomHash)())), w = (0, o.useRef)(null), E = (0, o.useContext)(s.CloseDelegateContext); return (0, o.useLayoutEffect)((() => ((0, r.ensureNotNull)(w.current).focus({ preventScroll: !0 }), E.subscribe(p, n), p.addDrawer(f), () => { p.removeDrawer(f), E.unsubscribe(p, n); })), []), o.createElement(c.Portal, null, o.createElement("div", { className: a(u.wrap, u[`position${t}`]) }, f === p.currentDrawer && o.createElement("div", { className: u.backdrop, onClick: n }), o.createElement(h, { className: a(d.drawer, u[`position${t}`], v), ref: w, "data-name": e["data-name"] }, m))); }
            const h = (0, o.forwardRef)(((e, t) => { const { className: n, ...r } = e; return o.createElement(m.TouchScrollContainer, { className: a(u.drawer, n), tabIndex: -1, ref: t, ...r }); }));
        }, 173: (e, t, n) => {
            "use strict";
            n.d(t, { emojiGroups: () => k, removeUnavailableEmoji: () => M });
            var o = n(50959), r = n(11542), a = n(99616), i = n(37603), c = n(32386), l = n(68796), s = n(5474), m = n(92177), u = n(83137), v = n(86209), h = n(14082), d = n(93826);
            const p = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "🤡", "💩", "👻", "💀", "☠️", "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "👋", "🤚", "🖐", "✋", "🖖", "👌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳", "💪", "🦾", "🦵", "🦿", "🦶", "👂", "🦻", "👃", "🧠", "🦷", "🦴", "👀", "👁", "👅", "👄", "💋", "🩸", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", "👨‍🦰", "👨‍🦱", "👨‍🦳", "👨‍🦲", "👩", "👩‍🦰", "🧑‍🦰", "👩‍🦱", "🧑‍🦱", "👩‍🦳", "🧑‍🦳", "👩‍🦲", "🧑‍🦲", "👱‍♀️", "👱‍♂️", "🧓", "👴", "👵", "🙍", "🙍‍♂️", "🙍‍♀️", "🙎", "🙎‍♂️", "🙎‍♀️", "🙅", "🙅‍♂️", "🙅‍♀️", "🙆", "🙆‍♂️", "🙆‍♀️", "💁", "💁‍♂️", "💁‍♀️", "🙋", "🙋‍♂️", "🙋‍♀️", "🧏", "🧏‍♂️", "🧏‍♀️", "🙇", "🙇‍♂️", "🙇‍♀️", "🤦", "🤦‍♂️", "🤦‍♀️", "🤷", "🤷‍♂️", "🤷‍♀️", "🧑‍⚕️", "👨‍⚕️", "👩‍⚕️", "🧑‍🎓", "👨‍🎓", "👩‍🎓", "🧑‍🏫", "👨‍🏫", "👩‍🏫", "🧑‍⚖️", "👨‍⚖️", "👩‍⚖️", "🧑‍🌾", "👨‍🌾", "👩‍🌾", "🧑‍🍳", "👨‍🍳", "👩‍🍳", "🧑‍🔧", "👨‍🔧", "👩‍🔧", "🧑‍🏭", "👨‍🏭", "👩‍🏭", "🧑‍💼", "👨‍💼", "👩‍💼", "🧑‍🔬", "👨‍🔬", "👩‍🔬", "🧑‍💻", "👨‍💻", "👩‍💻", "🧑‍🎤", "👨‍🎤", "👩‍🎤", "🧑‍🎨", "👨‍🎨", "👩‍🎨", "🧑‍✈️", "👨‍✈️", "👩‍✈️", "🧑‍🚀", "👨‍🚀", "👩‍🚀", "🧑‍🚒", "👨‍🚒", "👩‍🚒", "👮", "👮‍♂️", "👮‍♀️", "🕵", "🕵️‍♂️", "🕵️‍♀️", "💂", "💂‍♂️", "💂‍♀️", "👷", "👷‍♂️", "👷‍♀️", "🤴", "👸", "👳", "👳‍♂️", "👳‍♀️", "👲", "🧕", "🤵", "👰", "🤰", "🤱", "👼", "🎅", "🤶", "🦸", "🦸‍♂️", "🦸‍♀️", "🦹", "🦹‍♂️", "🦹‍♀️", "🧙", "🧙‍♂️", "🧙‍♀️", "🧚", "🧚‍♂️", "🧚‍♀️", "🧛", "🧛‍♂️", "🧛‍♀️", "🧜", "🧜‍♂️", "🧜‍♀️", "🧝", "🧝‍♂️", "🧝‍♀️", "🧞", "🧞‍♂️", "🧞‍♀️", "🧟", "🧟‍♂️", "🧟‍♀️", "💆", "💆‍♂️", "💆‍♀️", "💇", "💇‍♂️", "💇‍♀️", "🚶", "🚶‍♂️", "🚶‍♀️", "🧍", "🧍‍♂️", "🧍‍♀️", "🧎", "🧎‍♂️", "🧎‍♀️", "🧑‍🦯", "👨‍🦯", "👩‍🦯", "🧑‍🦼", "👨‍🦼", "👩‍🦼", "🧑‍🦽", "👨‍🦽", "👩‍🦽", "🏃", "🏃‍♂️", "🏃‍♀️", "💃", "🕺", "🕴", "👯", "👯‍♂️", "👯‍♀️", "🧖", "🧖‍♂️", "🧖‍♀️", "🧑‍🤝‍🧑", "👭", "👫", "👬", "💏", "👨‍❤️‍💋‍👨", "👩‍❤️‍💋‍👩", "💑", "👨‍❤️‍👨", "👩‍❤️‍👩", "👪", "👨‍👩‍👦", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧‍👧", "👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👨‍👨‍👦‍👦", "👨‍👨‍👧‍👧", "👩‍👩‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👩‍👩‍👦‍👦", "👩‍👩‍👧‍👧", "👨‍👦", "👨‍👦‍👦", "👨‍👧", "👨‍👧‍👦", "👨‍👧‍👧", "👩‍👦", "👩‍👦‍👦", "👩‍👧", "👩‍👧‍👦", "👩‍👧‍👧", "🗣", "👤", "👥", "👣"], f = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐽", "🐸", "🐵", "🙈", "🙉", "🙊", "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉", "🦇", "🐺", "🐗", "🐴", "🦄", "🐝", "🐛", "🦋", "🐌", "🐞", "🐜", "🦟", "🦗", "🕷", "🕸", "🦂", "🐢", "🐍", "🦎", "🦖", "🦕", "🐙", "🦑", "🦐", "🦞", "🦀", "🐡", "🐠", "🐟", "🐬", "🐳", "🐋", "🦈", "🐊", "🐅", "🐆", "🦓", "🦍", "🦧", "🐘", "🦛", "🦏", "🐪", "🐫", "🦒", "🦘", "🐃", "🐂", "🐄", "🐎", "🐖", "🐏", "🐑", "🦙", "🐐", "🦌", "🐕", "🐩", "🦮", "🐕‍🦺", "🐈", "🐓", "🦃", "🦚", "🦜", "🦢", "🦩", "🕊", "🐇", "🦝", "🦨", "🦡", "🦦", "🦥", "🐁", "🐀", "🐿", "🦔", "🐾", "🐉", "🐲", "🌵", "🎄", "🌲", "🌳", "🌴", "🌱", "🌿", "☘️", "🍀", "🎍", "🎋", "🍃", "🍂", "🍁", "🍄", "🐚", "🌾", "💐", "🌷", "🌹", "🥀", "🌺", "🌸", "🌼", "🌻", "🌞", "🌝", "🌛", "🌜", "🌚", "🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", "🌔", "🌙", "🌎", "🌍", "🌏", "🪐", "💫", "⭐️", "🌟", "✨", "⚡️", "☄️", "💥", "🔥", "🌪", "🌈", "☀️", "🌤", "⛅️", "🌥", "☁️", "🌦", "🌧", "⛈", "🌩", "🌨", "❄️", "☃️", "⛄️", "🌬", "💨", "💧", "💦", "☔️", "🌊", "🌫"], w = ["🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🥭", "🍍", "🥥", "🥝", "🍅", "🍆", "🥑", "🥦", "🥬", "🥒", "🌶", "🌽", "🥕", "🧄", "🧅", "🥔", "🍠", "🥐", "🥯", "🍞", "🥖", "🥨", "🧀", "🥚", "🍳", "🧈", "🥞", "🧇", "🥓", "🥩", "🍗", "🍖", "🌭", "🍔", "🍟", "🍕", "🥪", "🥙", "🧆", "🌮", "🌯", "🥗", "🥘", "🥫", "🍝", "🍜", "🍲", "🍛", "🍣", "🍱", "🥟", "🦪", "🍤", "🍙", "🍚", "🍘", "🍥", "🥠", "🥮", "🍢", "🍡", "🍧", "🍨", "🍦", "🥧", "🧁", "🍰", "🎂", "🍮", "🍭", "🍬", "🍫", "🍿", "🍩", "🍪", "🌰", "🥜", "🍯", "🥛", "🍼", "☕️", "🍵", "🧃", "🥤", "🍶", "🍺", "🍻", "🥂", "🍷", "🥃", "🍸", "🍹", "🧉", "🍾", "🧊", "🥄", "🍴", "🍽", "🥣", "🥡", "🥢", "🧂"], E = ["⚽️", "🏀", "🏈", "⚾️", "🥎", "🎾", "🏐", "🏉", "🥏", "🎱", "🪀", "🏓", "🏸", "🏒", "🏑", "🥍", "🏏", "🥅", "⛳️", "🪁", "🏹", "🎣", "🤿", "🥊", "🥋", "🎽", "🛹", "🛷", "⛸", "🥌", "🎿", "⛷", "🏂", "🪂", "🏋️", "🏋️‍♂️", "🏋️‍♀️", "🤼", "🤼‍♂️", "🤼‍♀️", "🤸‍♀️", "🤸", "🤸‍♂️", "⛹️", "⛹️‍♂️", "⛹️‍♀️", "🤺", "🤾", "🤾‍♂️", "🤾‍♀️", "🏌️", "🏌️‍♂️", "🏌️‍♀️", "🏇", "🧘", "🧘‍♂️", "🧘‍♀️", "🏄", "🏄‍♂️", "🏄‍♀️", "🏊", "🏊‍♂️", "🏊‍♀️", "🤽", "🤽‍♂️", "🤽‍♀️", "🚣", "🚣‍♂️", "🚣‍♀️", "🧗", "🧗‍♂️", "🧗‍♀️", "🚵", "🚵‍♂️", "🚵‍♀️", "🚴", "🚴‍♂️", "🚴‍♀️", "🏆", "🥇", "🥈", "🥉", "🏅", "🎖", "🏵", "🎗", "🎫", "🎟", "🎪", "🤹", "🤹‍♂️", "🤹‍♀️", "🎭", "🎨", "🎬", "🎤", "🎧", "🎼", "🎹", "🥁", "🎷", "🎺", "🎸", "🪕", "🎻", "🎲", "🎯", "🎳", "🎮", "🎰", "🧩"], g = ["🚗", "🚕", "🚙", "🚌", "🚎", "🏎", "🚓", "🚑", "🚒", "🚐", "🚚", "🚛", "🚜", "🦯", "🦽", "🦼", "🛴", "🚲", "🛵", "🏍", "🛺", "🚨", "🚔", "🚍", "🚘", "🚖", "🚡", "🚠", "🚟", "🚃", "🚋", "🚞", "🚝", "🚄", "🚅", "🚈", "🚂", "🚆", "🚇", "🚊", "🚉", "✈️", "🛫", "🛬", "🛩", "💺", "🛰", "🚀", "🛸", "🚁", "🛶", "⛵️", "🚤", "🛥", "🛳", "⛴", "🚢", "⚓️", "⛽️", "🚧", "🚦", "🚥", "🚏", "🗺", "🗿", "🗽", "🗼", "🏰", "🏯", "🏟", "🎡", "🎢", "🎠", "⛲️", "⛱", "🏖", "🏝", "🏜", "🌋", "⛰", "🏔", "🗻", "🏕", "⛺️", "🏠", "🏡", "🏘", "🏚", "🏗", "🏭", "🏢", "🏬", "🏣", "🏤", "🏥", "🏦", "🏨", "🏪", "🏫", "🏩", "💒", "🏛", "⛪️", "🕌", "🕍", "🛕", "🕋", "⛩", "🛤", "🛣", "🗾", "🎑", "🏞", "🌅", "🌄", "🌠", "🎇", "🎆", "🌇", "🌆", "🏙", "🌃", "🌌", "🌉", "🌁"], b = ["⌚️", "📱", "📲", "💻", "⌨️", "🖥", "🖨", "🖱", "🖲", "🕹", "🗜", "💽", "💾", "💿", "📀", "📼", "📷", "📸", "📹", "🎥", "📽", "🎞", "📞", "☎️", "📟", "📠", "📺", "📻", "🎙", "🎚", "🎛", "🧭", "⏱", "⏲", "⏰", "🕰", "⌛️", "⏳", "📡", "🔋", "🔌", "💡", "🔦", "🕯", "🪔", "🧯", "🛢", "💸", "💵", "💴", "💶", "💷", "💰", "💳", "💎", "⚖️", "🧰", "🔧", "🔨", "⚒", "🛠", "⛏", "🔩", "⚙️", "🧱", "⛓", "🧲", "🔫", "💣", "🧨", "🪓", "🔪", "🗡", "⚔️", "🛡", "🚬", "⚰️", "⚱️", "🏺", "🔮", "📿", "🧿", "💈", "⚗️", "🔭", "🔬", "🕳", "🩹", "🩺", "💊", "💉", "🧬", "🦠", "🧫", "🧪", "🌡", "🧹", "🧺", "🧻", "🚽", "🚰", "🚿", "🛁", "🛀", "🧼", "🪒", "🧽", "🧴", "🛎", "🔑", "🗝", "🚪", "🪑", "🛋", "🛏", "🛌", "🧸", "🖼", "🛍", "🛒", "🎁", "🎈", "🎏", "🎀", "🎊", "🎉", "🎎", "🏮", "🎐", "🧧", "✉️", "📩", "📨", "📧", "💌", "📥", "📤", "📦", "🏷", "📪", "📫", "📬", "📭", "📮", "📯", "📜", "📃", "📄", "📑", "🧾", "📊", "📈", "📉", "🗒", "🗓", "📆", "📅", "🗑", "📇", "🗃", "🗳", "🗄", "📋", "📁", "📂", "🗂", "🗞", "📰", "📓", "📔", "📒", "📕", "📗", "📘", "📙", "📚", "📖", "🔖", "🧷", "🔗", "📎", "🖇", "📐", "📏", "🧮", "📌", "📍", "✂️", "🖊", "🖋", "✒️", "🖌", "🖍", "📝", "✏️", "🔍", "🔎", "🔏", "🔐", "🔒", "🔓", "🧳", "🌂", "☂️", "🧵", "🧶", "👓", "🕶", "🥽", "🥼", "🦺", "👔", "👕", "👖", "🧣", "🧤", "🧥", "🧦", "👗", "👘", "🥻", "🩱", "🩲", "🩳", "👙", "👚", "👛", "👜", "👝", "🎒", "👞", "👟", "🥾", "🥿", "👠", "👡", "🩰", "👢", "👑", "👒", "🎩", "🎓", "🧢", "⛑", "💄", "💍", "💼"], C = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "☮️", "✝️", "☪️", "🕉", "☸️", "✡️", "🔯", "🕎", "☯️", "☦️", "🛐", "⛎", "♈️", "♉️", "♊️", "♋️", "♌️", "♍️", "♎️", "♏️", "♐️", "♑️", "♒️", "♓️", "🆔", "⚛️", "🉑", "☢️", "☣️", "📴", "📳", "🈶", "🈚️", "🈸", "🈺", "🈷️", "✴️", "🆚", "💮", "🉐", "㊙️", "㊗️", "🈴", "🈵", "🈹", "🈲", "🅰️", "🅱️", "🆎", "🆑", "🅾️", "🆘", "❌", "⭕️", "🛑", "⛔️", "📛", "🚫", "💯", "💢", "♨️", "🚷", "🚯", "🚳", "🚱", "🔞", "📵", "🚭", "❗️", "❕", "❓", "❔", "‼️", "⁉️", "🔅", "🔆", "〽️", "⚠️", "🚸", "🔱", "⚜️", "🔰", "♻️", "✅", "🈯️", "💹", "❇️", "✳️", "❎", "🌐", "💠", "Ⓜ️", "🌀", "💤", "🏧", "🚾", "♿️", "🅿️", "🈳", "🈂️", "🛂", "🛃", "🛄", "🛅", "🚹", "🚺", "🚼", "🚻", "🚮", "🎦", "📶", "🈁", "🔣", "ℹ️", "🔤", "🔡", "🔠", "🆖", "🆗", "🆙", "🆒", "🆕", "🆓", "0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟", "🔢", "#️⃣", "*️⃣", "⏏️", "▶️", "⏸", "⏯", "⏹", "⏺", "⏭", "⏮", "⏩", "⏪", "⏫", "⏬", "◀️", "🔼", "🔽", "➡️", "⬅️", "⬆️", "⬇️", "↗️", "↘️", "↙️", "↖️", "↕️", "↔️", "↪️", "↩️", "⤴️", "⤵️", "🔀", "🔁", "🔂", "🔄", "🔃", "🎵", "🎶", "➕", "➖", "➗", "✖️", "♾", "💲", "💱", "™️", "©️", "®️", "〰️", "➰", "➿", "🔚", "🔙", "🔛", "🔝", "🔜", "✔️", "☑️", "🔘", "🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "⚫️", "⚪️", "🟤", "🔺", "🔻", "🔸", "🔹", "🔶", "🔷", "🔳", "🔲", "▪️", "▫️", "◾️", "◽️", "◼️", "◻️", "🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "⬛️", "⬜️", "🟫", "🔈", "🔇", "🔉", "🔊", "🔔", "🔕", "📣", "📢", "👁‍🗨", "💬", "💭", "🗯", "♠️", "♣️", "♥️", "♦️", "🃏", "🎴", "🀄️", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕡", "🕢", "🕣", "🕤", "🕥", "🕦", "🕧"], z = ["🏳️", "🏴", "🏁", "🚩", "🏳️‍🌈", "🏴‍☠️", "🇦🇫", "🇦🇽", "🇦🇱", "🇩🇿", "🇦🇸", "🇦🇩", "🇦🇴", "🇦🇮", "🇦🇶", "🇦🇬", "🇦🇷", "🇦🇲", "🇦🇼", "🇦🇺", "🇦🇹", "🇦🇿", "🇧🇸", "🇧🇭", "🇧🇩", "🇧🇧", "🇧🇾", "🇧🇪", "🇧🇿", "🇧🇯", "🇧🇲", "🇧🇹", "🇧🇴", "🇧🇦", "🇧🇼", "🇧🇷", "🇮🇴", "🇻🇬", "🇧🇳", "🇧🇬", "🇧🇫", "🇧🇮", "🇰🇭", "🇨🇲", "🇨🇦", "🇮🇨", "🇨🇻", "🇧🇶", "🇰🇾", "🇨🇫", "🇹🇩", "🇨🇱", "🇨🇳", "🇨🇽", "🇨🇨", "🇨🇴", "🇰🇲", "🇨🇬", "🇨🇩", "🇨🇰", "🇨🇷", "🇨🇮", "🇭🇷", "🇨🇺", "🇨🇼", "🇨🇾", "🇨🇿", "🇩🇰", "🇩🇯", "🇩🇲", "🇩🇴", "🇪🇨", "🇪🇬", "🇸🇻", "🇬🇶", "🇪🇷", "🇪🇪", "🇪🇹", "🇪🇺", "🇫🇰", "🇫🇴", "🇫🇯", "🇫🇮", "🇫🇷", "🇬🇫", "🇵🇫", "🇹🇫", "🇬🇦", "🇬🇲", "🇬🇪", "🇩🇪", "🇬🇭", "🇬🇮", "🇬🇷", "🇬🇱", "🇬🇩", "🇬🇵", "🇬🇺", "🇬🇹", "🇬🇬", "🇬🇳", "🇬🇼", "🇬🇾", "🇭🇹", "🇭🇳", "🇭🇰", "🇭🇺", "🇮🇸", "🇮🇳", "🇮🇩", "🇮🇷", "🇮🇶", "🇮🇪", "🇮🇲", "🇮🇱", "🇮🇹", "🇯🇲", "🇯🇵", "🎌", "🇯🇪", "🇯🇴", "🇰🇿", "🇰🇪", "🇰🇮", "🇽🇰", "🇰🇼", "🇰🇬", "🇱🇦", "🇱🇻", "🇱🇧", "🇱🇸", "🇱🇷", "🇱🇾", "🇱🇮", "🇱🇹", "🇱🇺", "🇲🇴", "🇲🇰", "🇲🇬", "🇲🇼", "🇲🇾", "🇲🇻", "🇲🇱", "🇲🇹", "🇲🇭", "🇲🇶", "🇲🇷", "🇲🇺", "🇾🇹", "🇲🇽", "🇫🇲", "🇲🇩", "🇲🇨", "🇲🇳", "🇲🇪", "🇲🇸", "🇲🇦", "🇲🇿", "🇲🇲", "🇳🇦", "🇳🇷", "🇳🇵", "🇳🇱", "🇳🇨", "🇳🇿", "🇳🇮", "🇳🇪", "🇳🇬", "🇳🇺", "🇳🇫", "🇰🇵", "🇲🇵", "🇳🇴", "🇴🇲", "🇵🇰", "🇵🇼", "🇵🇸", "🇵🇦", "🇵🇬", "🇵🇾", "🇵🇪", "🇵🇭", "🇵🇳", "🇵🇱", "🇵🇹", "🇵🇷", "🇶🇦", "🇷🇪", "🇷🇴", "🇷🇺", "🇷🇼", "🇼🇸", "🇸🇲", "🇸🇦", "🇸🇳", "🇷🇸", "🇸🇨", "🇸🇱", "🇸🇬", "🇸🇽", "🇸🇰", "🇸🇮", "🇬🇸", "🇸🇧", "🇸🇴", "🇿🇦", "🇰🇷", "🇸🇸", "🇪🇸", "🇱🇰", "🇧🇱", "🇸🇭", "🇰🇳", "🇱🇨", "🇵🇲", "🇻🇨", "🇸🇩", "🇸🇷", "🇸🇿", "🇸🇪", "🇨🇭", "🇸🇾", "🇹🇼", "🇹🇯", "🇹🇿", "🇹🇭", "🇹🇱", "🇹🇬", "🇹🇰", "🇹🇴", "🇹🇹", "🇹🇳", "🇹🇷", "🇹🇲", "🇹🇨", "🇹🇻", "🇻🇮", "🇺🇬", "🇺🇦", "🇦🇪", "🇬🇧", "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "🏴󠁧󠁢󠁷󠁬󠁳󠁿", "🇺🇳", "🇺🇸", "🇺🇾", "🇺🇿", "🇻🇺", "🇻🇦", "🇻🇪", "🇻🇳", "🇼🇫", "🇪🇭", "🇾🇪", "🇿🇲", "🇿🇼"], x = [...p, ...f, ...w, ...E, ...g, ...b, ...C, ...z], I = new Set(x);
            function M(e) { return e.filter((e => I.has(e))); }
            const k = [{ title: r.t(null, { context: "emoji_group" }, n(15426)), emojis: [], content: o.createElement(a.IconItem, { icon: i }) }, { title: r.t(null, { context: "emoji_group" }, n(96330)), emojis: p, content: o.createElement(a.IconItem, { icon: c }) }, { title: r.t(null, { context: "emoji_group" }, n(60558)), emojis: f, content: o.createElement(a.IconItem, { icon: l }) }, { title: r.t(null, { context: "emoji_group" }, n(35305)), emojis: w, content: o.createElement(a.IconItem, { icon: s }) }, { title: r.t(null, { context: "emoji_group" }, n(14232)), emojis: E, content: o.createElement(a.IconItem, { icon: m }) }, { title: r.t(null, { context: "emoji_group" }, n(15395)), emojis: g, content: o.createElement(a.IconItem, { icon: u }) }, { title: r.t(null, { context: "emoji_group" }, n(72302)), emojis: b, content: o.createElement(a.IconItem, { icon: v }) }, { title: r.t(null, { context: "emoji_group" }, n(6878)), emojis: C, content: o.createElement(a.IconItem, { icon: h }) }, { title: r.t(null, { context: "emoji_group" }, n(49546)), emojis: z, content: o.createElement(a.IconItem, { icon: d }) }];
        }, 47291: (e, t, n) => {
            "use strict";
            n.d(t, { EmojiListContent: () => d, EmojiListContentContext: () => h });
            var o = n(50959), r = n(20037), a = n(97754), i = n.n(a), c = n(89346);
            function l(e) { const { title: t, className: n } = e; return o.createElement("div", { className: i()(c.wrapper, n) }, t); }
            var s = n(26601), m = n(77762), u = n(38223), v = n(97662);
            const h = o.createContext(null);
            function d(e) { const { listRef: t, outerRef: n, emojiGroups: a, emojiSize: i, onSelect: c, onContentRendered: l, ItemComponent: s, RowComponent: m, height: d } = e; (0, o.useEffect)((() => { var e; return null === (e = t.current) || void 0 === e ? void 0 : e.resetAfterIndex(0, !0); }), [a]); const f = (0, o.useCallback)((e => "title" === a[e].type ? 30 : i), [a, i]), w = (0, o.useCallback)((({ visibleStartIndex: e }) => { const { relatedTitle: t } = a[e]; l(t); }), [a, l]), E = Math.min(d - 102, window.innerHeight - 102); return o.createElement(h.Provider, { value: (0, o.useMemo)((() => ({ size: i, onSelect: c, ItemComponent: s, RowComponent: m })), [i, c, s, m]) }, o.createElement(r.VariableSizeList, { direction: (0, u.isRtl)() ? "rtl" : "ltr", className: v.list, ref: t, outerRef: n, width: "100%", height: E, itemData: a, itemCount: a.length, children: p, onItemsRendered: w, itemSize: f })); }
            const p = o.memo((e => { const { style: t, index: n, data: r } = e, a = r[n], { size: i, onSelect: c, ItemComponent: u, RowComponent: v = s.EmojisRow } = (0, m.useEnsuredContext)(h); return "title" === a.type ? o.createElement("div", { style: t }, o.createElement(l, { title: a.relatedTitle })) : o.createElement("div", { style: t }, o.createElement(v, { emojis: a.content, itemSize: i, onEmojiClick: c, ItemComponent: u })); }));
        }, 38297: (e, t, n) => {
            "use strict";
            n.d(t, { EmojiList: () => h });
            var o = n(50959), r = n(97754), a = n.n(r), i = n(29006), c = n(85034), l = n(47291);
            var s = n(49483), m = n(59369), u = n(46809);
            const v = 38;
            function h(e) {
                var t;
                const { className: n, emojis: r, onSelect: h, ItemComponent: d, RowComponent: p, height: f, category: w, emojiSize: E = v } = e, g = (0, o.useRef)(null), b = (0, o.useRef)(!1), [C, z] = (0, m.useRowsNavigation)(), [x, I] = (0, o.useState)(0), M = (0, o.useMemo)((() => function (e, t) {
                    if (0 === t)
                        return [];
                    const n = [];
                    return e.forEach((({ title: e, emojis: o }) => {
                        n.push({ type: "title", relatedTitle: e, content: [e] });
                        let r = [];
                        for (const a of o)
                            r.length < t ? r.push(a) : (n.push({
                                type: "emojiRow", relatedTitle: e, content: r
                            }), r = [a]);
                        r.length && n.push({ type: "emojiRow", relatedTitle: e, content: r });
                    })), n;
                }(r, x)), [r, x]), k = (0, i.useResizeObserver)((function (e) { const [t] = e, { width: n } = t.contentRect, o = Math.floor((n - 12) / E); I(o); }), [E]);
                (0, o.useEffect)((() => { M.length && N(0); }), [w]);
                const [A, j] = (0, o.useState)((null === (t = M[0]) || void 0 === t ? void 0 : t.relatedTitle) || ""), y = (0, o.useCallback)((e => { b.current || j(e); }), []);
                return o.createElement("div", { className: a()(u.wrapper, n) }, o.createElement(c.GroupTabs, { tabs: r, activeTab: A, onTabClick: function (e) { j(e); N(function (e) { return M.findIndex((({ relatedTitle: t, type: n }) => "title" === n && t === e)); }(e)); } }), o.createElement("div", { ref: k, onKeyDown: z }, o.createElement(l.EmojiListContent, { listRef: g, outerRef: C, emojiGroups: M, emojiSize: E, onSelect: h, onContentRendered: y, ItemComponent: d, RowComponent: p, height: f })));
                function N(e) { var t; s.CheckMobile.iOS() && C.current && (C.current.style.overflow = "hidden"), b.current = !0, null === (t = g.current) || void 0 === t || t.scrollToItem(e, "start"), requestAnimationFrame((() => { var t; null === (t = g.current) || void 0 === t || t.scrollToItem(e, "start"), s.CheckMobile.iOS() && C.current && (C.current.style.overflow = "auto"), b.current = !1; })); }
            }
        }, 26601: (e, t, n) => {
            "use strict";
            n.d(t, { EmojisRow: () => l });
            var o = n(50959), r = n(97754), a = n.n(r), i = n(83682), c = n(11123);
            const l = o.memo((e => { const { emojis: t, itemSize: n, onEmojiClick: r, ItemComponent: l, className: s } = e; return o.createElement("div", { "data-role": "row", className: a()(c.wrapper, s) }, t.map((e => o.createElement(i.EmojiWrap, { key: e, className: c.emojiItem, emoji: e, size: n, onClick: r, ItemComponent: l })))); }));
        }, 85034: (e, t, n) => {
            "use strict";
            n.d(t, { GroupTabs: () => v });
            var o = n(50959), r = n(97754), a = n.n(r), i = n(54079), c = n(50238), l = n(16838), s = n(17373);
            function m(e) { const { tab: t, isActive: n, onTabClick: r, children: i, className: m } = e, [u, v] = (0, c.useRovingTabindexElement)(null); return l.PLATFORM_ACCESSIBILITY_ENABLED ? o.createElement("button", { ref: u, tabIndex: v, onClick: h, className: a()(s.wrapper, n && s.isActive, s.button, m), type: "button", "aria-pressed": n }, i) : o.createElement("div", { className: a()(s.wrapper, n && s.isActive, m), onClick: h }, i); function h() { r(t); } }
            var u = n(12134);
            function v(e) { const { activeTab: t, tabs: n, onTabClick: r, className: c, tabClassName: l } = e; return o.createElement(i.Toolbar, { orientation: "horizontal", className: a()(u.wrapper, c), blurOnEscKeydown: !1 }, n.map((({ title: e, content: n }) => o.createElement(m, { key: e, tab: e, className: l, isActive: t === e, onTabClick: r }, n)))); }
        }, 99616: (e, t, n) => {
            "use strict";
            n.d(t, { IconItem: () => l });
            var o = n(50959), r = n(97754), a = n.n(r), i = n(9745), c = n(53737);
            function l(e) { return o.createElement("div", { className: a()(c.wrapper, e.className) }, o.createElement(i.Icon, { icon: e.icon })); }
        }, 83682: (e, t, n) => {
            "use strict";
            n.d(t, { EmojiWrap: () => h });
            var o = n(50959), r = n(97754), a = n.n(r), i = n(68616), c = n(34290);
            function l(e) { const { emoji: t, className: n } = e, r = (0, i.getTwemojiUrl)(t, "png"); return o.createElement("img", { className: a()(n, c.emoji), src: r, decoding: "async", width: "24", height: "24", alt: "", draggable: !1, onContextMenu: function (e) { e.preventDefault(); } }); }
            var s = n(16838), m = n(50238), u = n(13193);
            const v = 34;
            function h(e) {
                const { className: t, emoji: n, size: r = v, onClick: i, ItemComponent: c = l } = e, [h, d] = (0, m.useRovingTabindexElement)(null);
                return s.PLATFORM_ACCESSIBILITY_ENABLED ? o.createElement("button", { ref: h, tabIndex: d, onClick: p, style: { width: r, height: r }, className: a()(u.button, u.wrapper, t), type: "button" }, o.createElement(c, { emoji: n })) : o.createElement("div", { className: a()(u.wrapper, t), style: { width: r, height: r }, onClick: p }, o.createElement(c, { emoji: n }));
                function p() { i(n); }
            }
        }, 40173: (e, t, n) => {
            "use strict";
            function o(e, t, n = {}) { return Object.assign({}, e, function (e, t, n = {}) { const o = Object.assign({}, t); for (const r of Object.keys(t)) {
                const a = n[r] || r;
                a in e && (o[r] = [e[a], t[r]].join(" "));
            } return o; }(e, t, n)); }
            n.d(t, { mergeThemes: () => o });
        }, 81261: (e, t, n) => {
            "use strict";
            n.d(t, { focusFirstMenuItem: () => s, handleAccessibleMenuFocus: () => c, handleAccessibleMenuKeyDown: () => l, queryMenuElements: () => v });
            var o = n(16838), r = n(71468), a = n(68335);
            const i = [37, 39, 38, 40];
            function c(e, t) { e.target && o.PLATFORM_ACCESSIBILITY_ENABLED && e.relatedTarget === t.current && s(e.target); }
            function l(e) { var t; if (!o.PLATFORM_ACCESSIBILITY_ENABLED)
                return; if (e.defaultPrevented)
                return; const n = (0, a.hashFromEvent)(e); if (!i.includes(n))
                return; const c = document.activeElement; if (!(document.activeElement instanceof HTMLElement))
                return; const l = v(e.currentTarget).sort(o.navigationOrderComparator); if (0 === l.length)
                return; const s = document.activeElement.closest('[data-role="menuitem"]') || (null === (t = document.activeElement.parentElement) || void 0 === t ? void 0 : t.querySelector('[data-role="menuitem"]')); if (!(s instanceof HTMLElement))
                return; const d = l.indexOf(s); if (-1 === d)
                return; const p = h(s), f = p.indexOf(document.activeElement), w = -1 !== f, E = e => { c && (0, r.becomeSecondaryElement)(c), (0, r.becomeMainElement)(e), e.focus(); }; switch ((0, o.mapKeyCodeToDirection)(n)) {
                case "inlinePrev":
                    if (!p.length)
                        return;
                    e.preventDefault(), E(0 === f ? l[d] : w ? m(p, f, -1) : p[p.length - 1]);
                    break;
                case "inlineNext":
                    if (!p.length)
                        return;
                    e.preventDefault(), f === p.length - 1 ? E(l[d]) : E(w ? m(p, f, 1) : p[0]);
                    break;
                case "blockPrev": {
                    e.preventDefault();
                    const t = m(l, d, -1);
                    if (w) {
                        const e = u(t, f);
                        E(e || t);
                        break;
                    }
                    E(t);
                    break;
                }
                case "blockNext": {
                    e.preventDefault();
                    const t = m(l, d, 1);
                    if (w) {
                        const e = u(t, f);
                        E(e || t);
                        break;
                    }
                    E(t);
                }
            } }
            function s(e) { const [t] = v(e); t && ((0, r.becomeMainElement)(t), t.focus()); }
            function m(e, t, n) { return e[(t + e.length + n) % e.length]; }
            function u(e, t) { const n = h(e); return n.length ? n[(t + n.length) % n.length] : null; }
            function v(e) { return Array.from(e.querySelectorAll('[data-role="menuitem"]:not([disabled]):not([aria-disabled])')).filter((0, o.createScopedVisibleElementFilter)(e)); }
            function h(e) { return Array.from(e.querySelectorAll("[tabindex]:not([disabled]):not([aria-disabled])")).filter((0, o.createScopedVisibleElementFilter)(e)); }
        }, 36898: (e, t, n) => {
            "use strict";
            n.d(t, { useMouseClickAutoBlur: () => i });
            var o = n(50959), r = n(76460), a = n(16838);
            function i(e, t = !0) {
                (0, o.useEffect)((() => {
                    if (!a.PLATFORM_ACCESSIBILITY_ENABLED || !t)
                        return;
                    const n = t => {
                        const n = e.current;
                        null !== n && document.activeElement instanceof HTMLElement && ((0,
                            r.isKeyboardClick)(t) || n.contains(document.activeElement) && "INPUT" !== document.activeElement.tagName && document.activeElement.blur());
                    };
                    return window.addEventListener("click", n, !0), () => window.removeEventListener("click", n, !0);
                }), [t]);
            }
        }, 54079: (e, t, n) => {
            "use strict";
            n.d(t, { Toolbar: () => u });
            var o = n(50959), r = n(50151), a = n(47201), i = n(3343), c = n(16838), l = n(71468), s = n(39416), m = n(36898);
            const u = (0, o.forwardRef)((function (e, t) { const { onKeyDown: n, orientation: u, blurOnEscKeydown: v = !0, blurOnClick: h = !0, ...d } = e, p = c.PLATFORM_ACCESSIBILITY_ENABLED ? { role: "toolbar", "aria-orientation": u } : {}, f = (0, s.useFunctionalRefObject)(t); return (0, o.useLayoutEffect)((() => { if (!c.PLATFORM_ACCESSIBILITY_ENABLED)
                return; const e = (0, r.ensureNotNull)(f.current), t = () => { const t = (0, c.queryTabbableElements)(e).sort(c.navigationOrderComparator); if (0 === t.length) {
                const [t] = (0, c.queryFocusableElements)(e).sort(c.navigationOrderComparator);
                if (void 0 === t)
                    return;
                (0, l.becomeMainElement)(t);
            } if (t.length > 1) {
                const [, ...e] = t;
                for (const t of e)
                    (0, l.becomeSecondaryElement)(t);
            } }; return window.addEventListener("keyboard-navigation-activation", t), () => window.removeEventListener("keyboard-navigation-activation", t); }), []), (0, m.useMouseClickAutoBlur)(f, h), o.createElement("div", { ...d, ...p, ref: f, onKeyDown: (0, a.createSafeMulticastEventHandler)((function (e) { if (!c.PLATFORM_ACCESSIBILITY_ENABLED)
                    return; if (e.defaultPrevented)
                    return; if (!(document.activeElement instanceof HTMLElement))
                    return; const t = (0, i.hashFromEvent)(e); if (v && 27 === t)
                    return e.preventDefault(), void document.activeElement.blur(); if ("vertical" !== u && 37 !== t && 39 !== t)
                    return; if ("vertical" === u && 38 !== t && 40 !== t)
                    return; const n = e.currentTarget, o = (0, c.queryFocusableElements)(n).sort(c.navigationOrderComparator); if (0 === o.length)
                    return; const r = o.indexOf(document.activeElement); if (-1 === r)
                    return; e.preventDefault(); const a = () => { const e = (r + o.length - 1) % o.length; (0, l.becomeSecondaryElement)(o[r]), (0, l.becomeMainElement)(o[e]), o[e].focus(); }, s = () => { const e = (r + o.length + 1) % o.length; (0, l.becomeSecondaryElement)(o[r]), (0, l.becomeMainElement)(o[e]), o[e].focus(); }; switch ((0, c.mapKeyCodeToDirection)(t)) {
                    case "inlinePrev":
                        "vertical" !== u && a();
                        break;
                    case "inlineNext":
                        "vertical" !== u && s();
                        break;
                    case "blockPrev":
                        "vertical" === u && a();
                        break;
                    case "blockNext": "vertical" === u && s();
                } }), n) }); }));
        }, 92177: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M13.98 6.02L14.5 6c2.18 0 4.16.8 5.66 2.14l-5.66 5.65-2.31-2.3a8.43 8.43 0 0 0 1.55-3.64 14.01 14.01 0 0 0 .24-1.83zm-1.01.12a8.45 8.45 0 0 0-4.13 2l2.64 2.63a7.59 7.59 0 0 0 1.28-3.12c.12-.59.18-1.12.2-1.51zm-4.83 2.7a8.45 8.45 0 0 0-2 4.13c.39-.03.92-.1 1.51-.21a7.59 7.59 0 0 0 3.12-1.28L8.14 8.84zm-2.12 5.14a8.48 8.48 0 0 0 2.12 6.18l5.65-5.66-2.3-2.31a8.43 8.43 0 0 1-3.64 1.55 14.03 14.03 0 0 1-1.83.24zm2.82 6.88a8.46 8.46 0 0 0 5.13 2.12v-.07A8.95 8.95 0 0 1 16.3 17l-1.8-1.8-5.66 5.65zM14.97 23c2-.1 3.8-.9 5.19-2.13L17 17.72a7.94 7.94 0 0 0-2.04 5.27zm5.9-2.83a8.46 8.46 0 0 0 2.11-5.13h-.02a10.62 10.62 0 0 0-5.2 2l3.1 3.13zm2.12-6.13c-.1-2-.9-3.8-2.13-5.19l-5.65 5.66 1.83 1.83a11.6 11.6 0 0 1 5.95-2.3zM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5z"/></svg>';
        }, 68796: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M4.54 3.2l.78-.59 5.49 4.5 1.43 1.07a5.28 5.28 0 0 1 2.19-2.3 9.19 9.19 0 0 1 1.88-.85h.04l.01-.01.14.48.42-.28v.01l.01.02a3.14 3.14 0 0 1 .16.26l.37.72c.2.45.4 1.02.5 1.64a2.13 2.13 0 0 1 1.89.46l.18.16.03.02.18.16c.22.16.42.27.81.25a5.9 5.9 0 0 0 2.2-.86l.66-.36.09.75a5.98 5.98 0 0 1-1.7 5.1 6.87 6.87 0 0 1-1.7 1.23 19.97 19.97 0 0 1 .48 2.48c.25 1.73.42 4.08.06 6.5A1.46 1.46 0 0 1 19.68 25h-7.71a1.5 1.5 0 0 1-1.4-2.06l1-2.47c-.18.02-.37.03-.58.03a3 3 0 0 1-1.53-.4 6.84 6.84 0 0 1-1.6.64c-1.08.27-2.55.29-3.72-.89a4.06 4.06 0 0 1-.96-3 5.1 5.1 0 0 1 2-3.74 98.5 98.5 0 0 0 2.7-2.24L4.55 3.2zM16.5 5.5l-.14-.48.35-.1.2.3-.41.28zm-7.87 6.06a57.48 57.48 0 0 1-2.19 1.82l.49.26c.65.37 1.48.9 1.97 1.56a5.78 5.78 0 0 1 1.14 4.07l.06.03c.19.1.49.2.9.2.68 0 .95-.11 1.03-.16v-.03l.97.19h-.5.5v.03a.75.75 0 0 1-.01.1.74.74 0 0 1-.09.21l-1.39 3.47a.5.5 0 0 0 .47.69h7.71c.24 0 .43-.17.47-.38a22 22 0 0 0-.06-6.22 24.4 24.4 0 0 0-.56-2.71 11.35 11.35 0 0 0-.94-1.52 7.1 7.1 0 0 0-2.31-2.22l-.62-.31.49-.5A3.03 3.03 0 0 0 17 8.6a1.2 1.2 0 0 0 .01-.1c0-.65-.22-1.33-.46-1.86-.1-.21-.18-.4-.26-.54a8.07 8.07 0 0 0-1.34.64c-.9.54-1.74 1.32-1.95 2.36v.03l-.02.03L12.5 9l.47.16v.02a2.97 2.97 0 0 1-.1.26 5.9 5.9 0 0 1-.31.62c-.27.46-.7 1.07-1.34 1.39-.63.31-1.38.3-1.9.23a5.83 5.83 0 0 1-.7-.12zm3.26-2.39L10.2 7.9l-.02-.01L6.3 4.7l2.57 5.88h.01c.14.04.34.08.57.11.47.06.97.05 1.34-.14.36-.18.68-.57.91-.99.08-.14.15-.27.2-.39zm8.32 4.68a5.47 5.47 0 0 0 1.37-1.02 4.88 4.88 0 0 0 1.46-3.53c-.8.39-1.41.58-1.92.61-.7.05-1.14-.18-1.49-.45a5.6 5.6 0 0 1-.22-.19l-.03-.03-.17-.13a1.4 1.4 0 0 0-.33-.22c-.18-.07-.44-.12-.93 0l-.1.4c-.1.3-.28.69-.58 1.09.87.59 1.6 1.46 2.14 2.2a14.92 14.92 0 0 1 .8 1.27zM9.05 19.19v-.09a4.78 4.78 0 0 0-.96-3.3 5.56 5.56 0 0 0-1.65-1.29c-.3-.17-.6-.3-.8-.4l-.05-.03a4.05 4.05 0 0 0-1.4 2.82 3.1 3.1 0 0 0 .66 2.25c.83.82 1.86.84 2.78.62a5.71 5.71 0 0 0 1.42-.58zm4.26-5.87c-.3.24-.74.54-1.18.66-.37.1-.81.1-1.12.08a6.95 6.95 0 0 1-.54-.06h-.05l.08-.5.08-.5.03.01a5.02 5.02 0 0 0 1.26 0c.24-.06.54-.25.83-.47a6.1 6.1 0 0 0 .42-.37l.02-.02.36.35.35.36h-.01l-.03.04a6.09 6.09 0 0 1-.5.42zM6 17h1v-1H6v1z"/></svg>';
        }, 93826: e => { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 24v-5.5m0 0s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1v-6m-14 6v-6m0 0v-6s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1v6m-14 0s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1"/></svg>'; }, 5474: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M12.5 8h1.36l-.85-3.38.98-.24.9 3.62h7.64a1.34 1.34 0 0 1 .2.02c.13.02.31.07.5.16.18.09.38.24.53.46.15.24.24.52.24.86 0 .34-.09.62-.24.86a1.38 1.38 0 0 1-.79.56L22 24.54l-.03.46H6.5c-1 0-1.64-.68-1.99-1.23a4.4 4.4 0 0 1-.38-.78l-.01-.04c-.1-.03-.22-.07-.34-.13a1.36 1.36 0 0 1-.54-.46A1.51 1.51 0 0 1 3 21.5c0-.34.09-.62.24-.86.15-.22.35-.37.54-.46.1-.05.2-.09.28-.11a6.6 6.6 0 0 1 .96-2.34C5.92 16.35 7.56 15 10.5 15c.72 0 1.36.08 1.93.22l-.4-4.3a1.38 1.38 0 0 1-.8-.57A1.51 1.51 0 0 1 11 9.5c0-.34.09-.62.24-.86.15-.22.35-.37.54-.46a1.73 1.73 0 0 1 .7-.18h.02v.5V8zm.96 7.57a5.73 5.73 0 0 1 2.52 2.16 6.86 6.86 0 0 1 .95 2.34 1.38 1.38 0 0 1 .82.58c.16.23.25.51.25.85 0 .34-.09.62-.24.86-.15.22-.35.37-.54.46-.12.06-.24.1-.34.13l-.01.04a4.4 4.4 0 0 1-.54 1.01h4.7l.93-13h-8.91l.41 4.57zM14.5 9h8a.73.73 0 0 1 .28.07c.06.04.11.08.15.13.03.05.07.14.07.3 0 .16-.04.25-.07.3a.38.38 0 0 1-.15.13.73.73 0 0 1-.27.07H12.5a.73.73 0 0 1-.28-.07.38.38 0 0 1-.15-.13.52.52 0 0 1-.07-.3c0-.16.04-.25.07-.3.04-.05.09-.1.15-.13A.73.73 0 0 1 12.5 9h2.01zm1.4 11a5.8 5.8 0 0 0-.76-1.73C14.41 17.15 13.06 16 10.5 16c-2.56 0-3.91 1.15-4.64 2.27A5.86 5.86 0 0 0 5.1 20h10.78zM4.5 21a.72.72 0 0 0-.28.07.38.38 0 0 0-.15.13.52.52 0 0 0-.07.3c0 .16.04.25.07.3.04.05.09.1.15.13a.73.73 0 0 0 .27.07H16.5a.72.72 0 0 0 .28-.07.38.38 0 0 0 .15-.13.52.52 0 0 0 .07-.3.52.52 0 0 0-.07-.3.38.38 0 0 0-.15-.13.73.73 0 0 0-.27-.07H4.5zm.73 2l.13.23c.28.45.65.77 1.14.77h8c.5 0 .86-.32 1.14-.77.05-.07.1-.15.13-.23H5.23zM11 17v1h-1v-1h1zm-3 1h1v1H8v-1zm4 1v-1h1v1h-1z"/></svg>';
        }, 86209: e => { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M9.5 21H9h.5zm8 0H17h.5zm-6-10H11v1h.5v-1zm4 1h.5v-1h-.5v1zm2 7.5h.5-.5zm.29-1.59A7.97 7.97 0 0 0 21 11.5h-1a6.97 6.97 0 0 1-2.79 5.59l.58.82zM21 11.5A7.5 7.5 0 0 0 13.5 4v1a6.5 6.5 0 0 1 6.5 6.5h1zM13.5 4A7.5 7.5 0 0 0 6 11.5h1A6.5 6.5 0 0 1 13.5 5V4zM6 11.5a7.98 7.98 0 0 0 3.21 6.41l.57-.82A6.98 6.98 0 0 1 7 11.5H6zM9 21a1 1 0 0 0 1 1v-1H9zm8 1a1 1 0 0 0 1-1h-1v1zm-6-.5V23h1v-1.5h-1zm0 1.5a1 1 0 0 0 1 1v-1h-1zm1 1h3v-1h-3v1zm3 0a1 1 0 0 0 1-1h-1v1zm1-1v-1.5h-1V23h1zm-3-11.5v6h1v-6h-1zM9.5 20h8v-1h-8v1zM9 17.5v2h1v-2H9zm0 2V21h1v-1.5H9zm9 1.5v-1.5h-1V21h1zm0-1.5v-2h-1v2h1zM9.5 18h4v-1h-4v1zm4 0h4v-1h-4v1zm-2-6h2v-1h-2v1zm2 0h2v-1h-2v1zM10 22h1.5v-1H10v1zm1.5 0h4v-1h-4v1zm4 0H17v-1h-1.5v1z"/></svg>'; }, 37603: e => { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M6 14.5C6 9.78 9.78 6 14.5 6c4.72 0 8.5 3.78 8.5 8.5 0 4.72-3.78 8.5-8.5 8.5A8.46 8.46 0 0 1 6 14.5zM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5zM14 16V9h1v6h4v1h-5z"/></svg>'; }, 32386: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M6 14.5C6 9.78 9.78 6 14.5 6c4.72 0 8.5 3.78 8.5 8.5 0 4.72-3.78 8.5-8.5 8.5A8.46 8.46 0 0 1 6 14.5zM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5zM12 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 4l-.43.26v.01l.03.03a3.55 3.55 0 0 0 .3.4 5.7 5.7 0 0 0 9.22 0 5.42 5.42 0 0 0 .28-.4l.02-.03v-.01L19 17l-.43-.26v.02a2.45 2.45 0 0 1-.24.32c-.17.21-.43.5-.78.79a4.71 4.71 0 0 1-6.88-.8 4.32 4.32 0 0 1-.23-.31l-.01-.02L10 17z"/></svg>';
        }, 14082: e => { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M5.6 15.43A6.19 6.19 0 0 1 14 6.36a6.19 6.19 0 0 1 8.4 9.08l-.03.02-7.3 7.31a1.5 1.5 0 0 1-2.13 0l-7.3-7.3-.03-.03m.71-.7v-.01a5.19 5.19 0 0 1 7.33-7.34v.01c.2.2.51.19.7 0a5.19 5.19 0 0 1 7.34 7.33l-.03.02-7.3 7.31a.5.5 0 0 1-.71 0l-7.3-7.3-.03-.02z"/></svg>'; }, 83137: e => { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M22.87 6.44c.09-.78-.53-1.4-1.3-1.31-1.43.15-3.43.48-5.42 1.2a11.8 11.8 0 0 0-5.23 3.44L9.86 11.9l6.24 6.24 2.13-1.06a11.8 11.8 0 0 0 3.44-5.23c.72-1.99 1.05-4 1.2-5.41zm-4.93 11.9l-1.72.86-.04.02h-.04l-2.2.67v.01a19.68 19.68 0 0 0-.13 3.33c.01.14.08.22.17.26.08.04.2.05.32-.03a18.83 18.83 0 0 0 2.79-2.26 8.18 8.18 0 0 0 .44-1.1c.16-.51.33-1.12.41-1.76zm-.44 3.16l.35.35-.01.02-.05.05a16.85 16.85 0 0 1-.83.76c-.54.47-1.3 1.08-2.1 1.61a1.3 1.3 0 0 1-2.05-.98 16.46 16.46 0 0 1 .09-3.08l-.16.05a1.5 1.5 0 0 1-1.53-.36l-3.13-3.13c-.4-.4-.54-1-.36-1.53l.05-.16-.36.04c-.7.06-1.62.11-2.54.06a1.3 1.3 0 0 1-1.13-.8c-.18-.42-.13-.94.17-1.35a87.55 87.55 0 0 1 2.15-2.8l.04-.04v-.02l.4.31-.22-.45.03-.01a5.93 5.93 0 0 1 .34-.16c.23-.1.55-.22.94-.35A9.77 9.77 0 0 1 10.26 9a12.9 12.9 0 0 1 5.55-3.61c2.09-.76 4.18-1.1 5.65-1.26 1.41-.15 2.56 1 2.4 2.41a24.04 24.04 0 0 1-1.25 5.65A12.9 12.9 0 0 1 19 17.74a9.77 9.77 0 0 1-.88 3.61 9.18 9.18 0 0 1-.16.34v.03h-.01l-.45-.22zm0 0l.45.22-.04.08-.06.05-.35-.35zm-11-11l-.4-.31.08-.09.1-.05.22.45zm3.16-.44a9.61 9.61 0 0 0-2.84.84l-.13.16a109.83 109.83 0 0 0-1.97 2.58.4.4 0 0 0-.06.38c.04.1.12.17.27.18a16.05 16.05 0 0 0 3.18-.15l.66-2.2.01-.03.02-.04.86-1.72zm5.4 8.45l-5.57-5.56-.51 1.7-.31.92a.5.5 0 0 0 .12.51l3.13 3.13a.5.5 0 0 0 .5.12l.92-.3h.02l1.7-.52zm-10.91.64l2-2 .7.7-2 2-.7-.7zm0 4l4-4 .7.7-4 4-.7-.7zm4 0l2-2 .7.7-2 2-.7-.7zM16 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zM17.5 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/></svg>'; } }]);
