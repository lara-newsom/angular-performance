export const IS_TABLE_VIEW_ENABLED = 'isTableViewEnabled';
export const IS_CHECKOUT_ENABLED = 'isCheckoutEnabled';

export const ALL_FEATURE_FLAGS = [
  IS_TABLE_VIEW_ENABLED,
  IS_CHECKOUT_ENABLED,
];
export type FeatureFlagNames = typeof ALL_FEATURE_FLAGS[number];

export const FEATURE_FLAGS_DATA: Record<FeatureFlagNames, boolean> = {
  [IS_TABLE_VIEW_ENABLED]: true,
  [IS_CHECKOUT_ENABLED]: true
};
