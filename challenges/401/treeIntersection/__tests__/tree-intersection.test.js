'use strict';

const treeIntersection = require('../tree-intersection');

describe('tree-intersection', () => {
  it('returns array of values found in both trees', () => {
    let tree1 = { val: 100 };
    tree1.left = { val: 150 };
    tree1.right = { val: 200 };

    let tree2 = { val: 100 };
    tree2.left = { val: 150 };

    let values = treeIntersection(tree1, tree2);

    expect(values).toEqual([100, 150]);
  });

  it('handles trees without same values', () => {
    let tree1 = { val: 100 };
    tree1.left = { val: 150 };
    tree1.right = { val: 200 };

    let tree2 = { val: 110 };
    tree2.left = { val: 160 };
    tree2.right = { val: 180 };

    let values = treeIntersection(tree1, tree2);

    expect(values).toEqual([]);
  });

  it('handles multiple same values in a tree', () => {
    let tree1 = { val: 100 };
    tree1.left = { val: 150 };
    tree1.right = { val: 200 };

    let tree2 = { val: 100 };
    tree2.left = { val: 100 };
    tree2.right = { val: 150 };

    let values = treeIntersection(tree1, tree2);

    expect(values).toEqual([100, 150]);
  });
});