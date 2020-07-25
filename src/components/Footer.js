import React from 'react';
import { Link } from '@reach/router';
import classNames from 'classnames';

function TodoFooter({
  count,
  uri,
  completedCount,
  onClearCompleted,
  nowShowing
}) {
  var activeTodoWord = count > 1 ? 'items' : 'item';
  var clearButton = null;

  if (completedCount > 0) {
    clearButton = (
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    );
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count}</strong> {activeTodoWord} left
      </span>
      <ul className="filters">
        <li>
          <Link
            to={uri}
            className={classNames({ selected: nowShowing === 'all' })}
          >
            All
          </Link>
        </li>{' '}
        <li>
          <Link
            to={uri + '/active'}
            className={classNames({ selected: nowShowing === 'active' })}
          >
            Active
          </Link>
        </li>{' '}
        <li>
          <Link
            to={uri + '/completed'}
            className={classNames({ selected: nowShowing === 'completed' })}
          >
            Completed
          </Link>
        </li>
      </ul>
      {clearButton}
    </footer>
  );
}

export default TodoFooter;
