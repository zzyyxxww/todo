import { getLastSiblingIndex } from './get-last-sibling'

function task(indent: number) {
  return { text: '', indent, checked: false }
}

test('getLastSiblingIndex', () => {
  expect(getLastSiblingIndex([
    task(2),
    task(3),
    task(2),
    task(1),
    task(2),
  ], 0)).toStrictEqual(2)
  expect(getLastSiblingIndex([
    task(2),
    task(1),
  ], 0)).toStrictEqual(0)
  expect(getLastSiblingIndex([
    task(2),
    task(3),
    task(3),
    task(3),
    task(4),
    task(2),
  ], 1)).toStrictEqual(3)
})
