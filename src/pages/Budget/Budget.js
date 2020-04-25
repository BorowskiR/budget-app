import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';

import {
  fetchBudget,
  fetchBudgetedCategories,
} from 'data/actions/budget.actions';
import { fetchAllCategories } from 'data/actions/common.actions';

import { Grid } from './Budget.css';

function Budget({
  budgetLoadingState,
  commonLoadingState,
  fetchBudgetedCategories,
  fetchBudget,
  fetchAllCategories,
}) {
  useEffect(() => {
    fetchBudget(1);
    fetchBudgetedCategories(1);
    fetchAllCategories();
  }, [fetchBudget, fetchBudgetedCategories, fetchAllCategories]);

  const isLoaded =
    !!commonLoadingState &&
    Object.keys(commonLoadingState).length === 0 &&
    !!budgetLoadingState &&
    Object.keys(budgetLoadingState).length === 0;

  console.log(isLoaded);

  return (
    <Grid>
      <section>Category list</section>
      <section>Transaction list</section>
    </Grid>
  );
}

export default connect(
  (state) => {
    return {
      budget: state.budget.budget,
      commonLoadingState: state.common.loadingState,
      budgetLoadingState: state.budget.loadingState,
    };
  },
  {
    fetchBudget,
    fetchBudgetedCategories,
    fetchAllCategories,
  }
)(Budget);
