import {all} from "redux-saga/effects"
import maincategorySagas from './MaincategorySagas'
import subcategorySagas from './SubcategorySaga'
import brandSagas from './BrandSaga'
import productSagas from './ProductSaga'
import testimonialSagas from './TestimonialSaga'

export default function* RootSaga() {
    yield all([
        maincategorySagas(),
        brandSagas(),
        productSagas(),
        subcategorySagas(),
        testimonialSagas(),
    ])
}