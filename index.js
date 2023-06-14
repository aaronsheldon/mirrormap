// Default class
module.exports = class MirrorMap extends Map {

    // Override to call custom setter
    constructor(entries = []) {
        super();
        for (const [ k, v ] of entries) { this.set(k, v); }
    }

    // Override getter to always return a set
    get(key) { return super.get(key) || new Set(); }

    // Override setter to add referential reflection
    set(key, value) {

        // Bail on either key or value invalid
        if (key === undefined) { return this; }
        if (value === undefined) { return this; }
        if (key === value) { return this.reflect(key); }

        // Retrieve keys and values
        const vs = this.get(key);
        const ks = this.get(value);

        // Set new key or value sets
        if (vs.size < 1) { super.set(key, vs); }
        if (ks.size < 1) { super.set(value, ks); }

        // Add key and value to sets
        vs.add(value);
        ks.add(key);

        // Send
        return this;
    }

    // Override delete to ensure referential integrity
    delete(key) {

        // Retrieve values
        const vs = this.get(key);

        // Not found
        if (vs.size < 1) { return false; }

        // Remove key from reflection
        vs.forEach(
            (v) => {
                const ks = this.get(v);
                if (vs === ks) { return; };
                ks.delete(key);
                if (ks.size < 1) { super.delete(v); }
            }
        );

        // Send
        return super.delete(key);
    }

    // Courtesy method to replace keys
    move(origin, destination) {

        // Bail on either key invalid
        if (origin === undefined) { return this; }
        if (destination === undefined) { return this; }
        if (origin === destination) { return this; }

        // Retrieve values
        const os = this.get(origin);
        const ds = this.get(destination);

        // Not found
        if (os.size < 1) { return this; }
        if (ds.size < 1) { super.set(destination, ds); }

        // Move values over
        os.forEach(
            (v) => {
                const ks = this.get(v);
                if (os === ks) { return; }
                ks.delete(origin);
                ks.add(destination);
                ds.add(v);
            }
        );

        // Clean up source
        super.delete(origin);
        return this;
    }

    // Courtesy method to duplicate values
    copy(origin, destination) {

        // Bail on either key invalid
        if (origin === undefined) { return this; }
        if (destination === undefined) { return this; }
        if (origin === destination) { return this; }

        // Retrieve values
        const os = this.get(origin);
        const ds = this.get(destination);

        // Not found
        if (os.size < 1) { return this; }
        if (ds.size < 1) { super.set(destination, ds); }

        // Move values over
        os.forEach(
            (v) => {
                const ks = this.get(v);
                ks.add(destination);
                ds.add(v);
            }
        );

        // Send
        return this;
    }

    // Helper method to unlink
    undo(key, value) {

        // Bail on invalid
        if (key === undefined) { return false; }
        if (value === undefined) { return false; }
        if (key === value) { return this.dissect(key); }

        // Retrieve
        const vs = this.get(key);
        const ks = this.get(value);

        // Remove
        const rv = vs.delete(value);
        const rk = ks.delete(key);

        // Clean up
        if (vs.size < 1) { super.delete(key); }
        if (ks.size < 1) { super.delete(value); }

        // Send
        return rv && rk;
    }

    // Helper method to create self-references
    reflect(key) {

        // Bail on key invalid
        if (key === undefined) { return this; }

        // Retrieve values
        const vs = this.get(key);

        // Set new value sets
        if (vs.size < 1) { super.set(key, vs); }

        // Add key to set
        vs.add(key);

        // Send
        return this;
    }

    // Helper method to remove self-references
    dissect(key) {

        // Bail on key invalid
        if (key === undefined) { return false; }

        // Retrieve values
        const vs = this.get(key);

        // Remove
        const r = vs.delete(key);

        // Clean up
        if (vs.size < 1) { super.delete(key); }

        // Send
        return r;
    }
}
