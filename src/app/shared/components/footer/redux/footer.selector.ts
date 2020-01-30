import { createSelector, createFeatureSelector } from "@ngrx/store";
import { FooterState } from "./footer.state";

const getFooter = createFeatureSelector('footer');

export const getFooterData = createSelector(
    getFooter, (state: FooterState) => state.footer
)