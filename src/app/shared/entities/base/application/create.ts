export function create<E>(item: E, service: any) {
  return service.create(item);
}
