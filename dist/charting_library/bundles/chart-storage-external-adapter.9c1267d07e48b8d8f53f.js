"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[8313], { 33047: (e, o, r) => { r.r(o), r.d(o, { ChartStorageExternalAdapter: () => a }); class a {
            constructor(e) { this._externalAdapter = e, this._externalAdapter.saveLineToolsAndGroups && this._externalAdapter.loadLineToolsAndGroups || console.warn("saveLineToolsAndGroups and loadLineToolsAndGroups are required in the SaveLoad Adapter when `saveload_separate_drawings_storage` featureset is enabled."); }
            async saveLineToolsAndGroups(e, o, r, a, t) { if (!this._externalAdapter.saveLineToolsAndGroups)
                throw new Error("saveLineToolsAndGroups should be implemented within the SaveLoad Adapter when `saveload_separate_drawings_storage` featureset is enabled."); if (void 0 === e)
                throw new Error("Cannot save line tools without a layout"); return await this._externalAdapter.saveLineToolsAndGroups(e, o, r), { chartId: o, content: "", layoutId: e, savedDto: r, sharingMode: a }; }
            async loadLineToolsAndGroups(e, o, r) { if (!this._externalAdapter.loadLineToolsAndGroups)
                throw new Error("loadLineToolsAndGroups should be implemented within the SaveLoad Adapter when `saveload_separate_drawings_storage` featureset is enabled."); const a = {}; "mainSeriesLineTools" === r.requestType && (a.symbol = r.symbol); return await this._externalAdapter.loadLineToolsAndGroups(e, o, r.requestType, a); }
            removeLineTools(e, o, r, a) { throw new Error("Method not implemented."); }
            getLayoutDrawingsSizeInfo(e, o) { throw new Error("Method not implemented."); }
            getUserGlobalDrawingsSizeInfo(e) { throw new Error("Method not implemented."); }
        } } }]);
